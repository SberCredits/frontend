import { FC, useState } from "react";
import classNames from "classnames/bind";

import { parseDate } from "@/helpers/parseDate";
import { useGetApplicationsQuery } from "@/api/applicationApi";

import { DropDown } from "@/ui/DropDown";
import { InputSearch } from "@/ui/InputSearch";
import { Application } from "@/components/Application";
import { LinkAsButton } from "@/components/LinkAsButton";
import { ReactComponent as Arrow } from "@/assets/icons/arrow.svg";

import styles from "./styles.module.scss";
import { authLocalStorage } from "@/utils/authLocalStorage";

const cx = classNames.bind(styles);

const sort: {
  text: string;
  order: string;
}[] = [
  { text: "По убыванию статуса", order: "-status" },
  { text: "По возрастанию статуса", order: "+status" },
  { text: "По убыванию номеру заявки", order: "-id" },
  { text: "По возрастанию номеру заявки", order: "+id" },
];

const Home: FC = () => {
  const [activeEl, setActiveEL] = useState<string | null>(null);
  const [search, setSearch] = useState("");
  const { data } = useGetApplicationsQuery({
    order_by: sort.find(({ text }) => text === activeEl)?.order,
    application_id__istartswith: search.toLowerCase(),
  });

  console.log(data);

  const handleClickButton = () => {
    authLocalStorage.remove();
  };

  return (
    <main className={cx("home")}>
      <div className={cx("home__content", "container")}>
        <div className={cx("home__top")}>
          <LinkAsButton
            to="/auth"
            onClick={handleClickButton}
            reactAddon={<Arrow />}
          >
            Выйти
          </LinkAsButton>
        </div>
        <nav className={cx("home__nav")}>
          <DropDown
            title="Статус"
            list={sort.map(({ text }) => text)}
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
