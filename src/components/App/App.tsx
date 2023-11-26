import { FC } from "react";
import classNames from "classnames/bind";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { Home } from "@/pages/Home";
import { Auth } from "@/pages/Auth";
import { Application } from "@/pages/Application";

import styles from "./styles.module.scss";

const cx = classNames.bind(styles);

// const employ = {
//   salary: 1,
//   employer: "string",
//   file: "string",
//   experience: 1,
//   role: "string",
//   id: "string",
// };

const App: FC = () => (
  <div className={cx("app")}>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/application/:id" element={<Application />} />
      </Routes>
    </Router>
  </div>
);

export default App;
