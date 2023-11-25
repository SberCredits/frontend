import { FC, useState } from "react";
import classNames from "classnames/bind";

import { ReactComponent as Expand } from "@/assets/icons/expand.svg";
import { OutsideClickHandler } from "@/components/OutsideClickHandler";

import styles from "./styles.module.scss";

const cx = classNames.bind(styles);

interface IMultiselectProps {
  title: string;
  list: string[];
  activeEl: string | null;
  className?: string;
  onChange: (value: string | null) => void;
}

const DropDown: FC<IMultiselectProps> = ({
  title,
  list,
  activeEl,
  className,
  onChange,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={cx("select", className, { open: isOpen })}>
      <OutsideClickHandler onOutsideClick={() => setIsOpen(false)}>
        <p className={cx("select__title")}>{title}</p>
        <div
          role="presentation"
          onClick={() => setIsOpen(!isOpen)}
          className={cx("select__top")}
        >
          <p className={cx("select__element")}>
            {activeEl || "Выберите статус"}
          </p>
          <button type="button" className={cx("select__icon")}>
            <Expand />
          </button>
        </div>
        <div className={cx("select__content")}>
          <div className={cx("select__wrapper")}>
            <div className={cx("select__body")}>
              <ul className={cx("select__list")}>
                {list.map((i) => (
                  <li key={i} className={cx("select__item")}>
                    <button
                      type="button"
                      onClick={() => onChange(i)}
                      className={cx("select__button")}
                    >
                      {i}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </OutsideClickHandler>
    </div>
  );
};
export default DropDown;
