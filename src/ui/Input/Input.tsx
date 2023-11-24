import { forwardRef, InputHTMLAttributes } from "react";
import classNames from "classnames/bind";

import { Error } from "@/ui/Error";

import styles from "./styles.module.scss";

const cx = classNames.bind(styles);

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  error?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ name, error, value, className, ...props }, ref) => (
    <div>
      <input
        {...props}
        ref={ref}
        name={name}
        value={value}
        className={cx("input", error ?? `input-error`, className)}
      />
      {error && <Error error={error} />}
    </div>
  )
);

export default Input;
