import { FC } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { Home } from "@/pages/Home";

const App: FC = () => {
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
