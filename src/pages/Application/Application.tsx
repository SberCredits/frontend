import { FC } from "react";
import classNames from "classnames/bind";

import styles from "./styles.module.scss";

const cx = classNames.bind(styles);

const Application: FC = () => {
  return (
    <main className={cx("application")}>
      <div className={cx("application__content", "container")}>application</div>
    </main>
  );
};

export default Application;
