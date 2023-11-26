import { FC } from "react";
import classNames from "classnames/bind";
import { useParams } from "react-router-dom";

import { useGetApplicationByIDQuery } from "@/api/applicationApi";

import { ApplicationBlock } from "@/components/ApplicationBlock";

import styles from "./styles.module.scss";

const cx = classNames.bind(styles);

const Application: FC = () => {
  const { id } = useParams();
  const { data } = useGetApplicationByIDQuery(id);

  if (!data) return null;

  const item = data.application.personal;

  return (
    <main className={cx("application")}>
      <div className={cx("application__content", "container")}>
        <h1 className={cx("application__title")}>user</h1>
        <div className={cx("application__items")}>
          <ApplicationBlock item={item} />
        </div>
      </div>
    </main>
  );
};

export default Application;
