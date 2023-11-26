import { FC } from "react";
import classNames from "classnames/bind";

import data from "./data.json";
import { TApplicationComponent } from "@/types/Application";

import styles from "./styles.module.scss";

const cx = classNames.bind(styles);

interface IApplicationBlockProps {
  item: TApplicationComponent;
}

const ApplicationBlock: FC<IApplicationBlockProps> = ({ item }) => {
  return (
    <div className={cx("item")}>
      <h3 className={cx("item__title")}>Title</h3>
      <ul className={cx("item__list")}>
        {Object.keys(item as object).map((i) => {
          const key = i as keyof TApplicationComponent;

          return (
            <li key={i} className={cx("item__element")}>
              {/* eslint-disable-next-line */}
              {/* @ts-ignore */}
              <p className={cx("item__name")}>{data[key] || key}:</p>
              <p className={cx("item__text")}>{String(item[key])}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ApplicationBlock;
