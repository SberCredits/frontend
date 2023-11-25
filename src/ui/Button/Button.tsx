import { ButtonHTMLAttributes, FC, ReactNode } from "react";
import classNames from "classnames/bind";

import styles from "./styles.module.scss";

const cx = classNames.bind(styles);

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  reactAddon?: ReactNode;
}

const Button: FC<IButtonProps> = ({
  reactAddon,
  children,
  className,
  ...props
}) => (
  <button
    type="button"
    className={cx("button", className, { icon: reactAddon })}
    {...props}
  >
    {children}
    {reactAddon}
  </button>
);

export default Button;
