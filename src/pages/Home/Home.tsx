import { FC, useState } from "react";
import classNames from "classnames/bind";

import { parseDate } from "@/helpers/parseDate";
import {
  // useCheckApplicationByIdQuery,
  useGetApplicationsQuery,
} from "@/api/applicationApi";

import { DropDown } from "@/ui/DropDown";
import { InputSearch } from "@/ui/InputSearch";
import { Application } from "@/components/Application";
import { LinkAsButton } from "@/components/LinkAsButton";
import { ReactComponent as Arrow } from "@/assets/icons/arrow.svg";

import styles from "./styles.module.scss";

const cx = classNames.bind(styles);

const Home: FC = () => {
  const { data } = useGetApplicationsQuery();
  // const { data: check } = useCheckApplicationByIdQuery();
  const [activeEl, setActiveEL] = useState<string | null>(null);
  const [search, setSearch] = useState("");

  console.log(search);
  console.log(data);

  return (
    <main className={cx("home")}>
      <div className={cx("home__content", "container")}>
        <div className={cx("home__top")}>
          <LinkAsButton to="/auth" reactAddon={<Arrow />}>
            Выйти
          </LinkAsButton>
        </div>
        <nav className={cx("home__nav")}>
          <DropDown
            title="Статус"
            list={["1", "2", "3"]}
            activeEl={activeEl}
            onChange={setActiveEL}
          />
          <InputSearch placeholder="Найдите заявку" setValue={setSearch} />
        </nav>
        <ul className={cx("home__list")}>
          {data?.map(({ id, status, personal, created_at }) => (
            <li key={id}>
              <Application
                number={id}
                user={`${personal.first_name} ${personal.middle_name} ${personal.last_name}`}
                status={status}
                date={parseDate(created_at)}
              />
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
};

export default Home;
