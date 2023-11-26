import { ComponentProps, FC } from "react";
import { Link } from "react-router-dom";
import classNames from "classnames/bind";

import { Status } from "@/ui/Status";

import styles from "./styles.module.scss";
import { useSetApplicationByIdMutation } from "@/api/applicationApi";

const cx = classNames.bind(styles);

interface IApplicationProps {
  number: string;
  user: string;
  status: ComponentProps<typeof Status>["variant"];
  date: string;
}

const Application: FC<IApplicationProps> = ({ number, user, status, date }) => {
  const [setRequest] = useSetApplicationByIdMutation();

  const handleClick = async () => {
    const formData = new FormData();
    formData.append("status", "modification");

    await setRequest({ id: number, data: formData });
  };

  return (
    <Link
      to={`/application/${number}`}
      onClick={handleClick}
      className={cx("item")}
    >
      <div className={cx("item__right")}>
        <p className={cx("item__number")}>№{number}</p>
        <p className={cx("item__user")}>{user}</p>
      </div>
      <div className={cx("item__left")}>
        <Status className={cx("item__status")} variant={status} />
        <span className={cx("item_date")}>{date}</span>
      </div>
    </Link>
  );
};

export default Application;
