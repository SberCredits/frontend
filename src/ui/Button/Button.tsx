import { ButtonHTMLAttributes, FC } from "react";
import classNames from "classnames/bind";

import styles from "./styles.module.scss";

const cx = classNames.bind(styles);

const Button: FC<ButtonHTMLAttributes<HTMLButtonElement>> = ({
  children,
  className,
  ...props
}) => (
  <button type="button" className={cx("button", className)} {...props}>
    {children}
  </button>
);

export default Button;
