import { FC } from "react";
import classNames from "classnames/bind";

import { AuthForm } from "@/components/AuthForm";

import styles from "./styles.module.scss";

const cx = classNames.bind(styles);

const Auth: FC = () => {
  return (
    <main className={cx("auth")}>
      <AuthForm />
    </main>
  );
};

export default Auth;
