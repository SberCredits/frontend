import { FC } from "react";
import classNames from "classnames/bind";

import variants from "./variants.json";

import styles from "./styles.module.scss";

const cx = classNames.bind(styles);

interface IStatusProps {
  variant?: keyof typeof variants;
  className?: string;
}

const Status: FC<IStatusProps> = ({ variant = "new", className }) => (
  <div className={cx("status", `status-${variant}`, className)}>
    {variants[variant]}
  </div>
);

export default Status;
