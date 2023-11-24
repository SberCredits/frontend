import { FC } from "react";
import classNames from "classnames/bind";

import { Input } from "@/ui/Input";
import { Button } from "@/ui/Button";

import styles from "./styles.module.scss";

const cx = classNames.bind(styles);

const AuthForm: FC = () => {
  return (
    <div className={cx("form")}>
      <h4 className={cx("form__title")}>Авторизация</h4>
      <div className={cx("form__inputs")}>
        <Input placeholder="Введите логин" />
        <Input placeholder="Введите пароль" />
      </div>
      <Button>Войти</Button>
    </div>
  );
};

export default AuthForm;
