import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import AppLayout from "./components/AppLayout";
import Home from "./modules/Home";
import Cards from "./modules/Cards";
import Payments from "./modules/Payments";
import Credit from "./modules/Credit";
import Settings from "./modules/Settings";

import "./App.css";

const App: React.FC = () => {
  return (
    <Router>
      <AppLayout>
        <Routes>
          <Route path={"/"} element={<Home />} />
          <Route path={"/cards"} element={<Cards />} />
          <Route path={"/payments"} element={<Payments />} />
          <Route path={"/credit"} element={<Credit />} />
          <Route path={"/settings"} element={<Settings />} />
        </Routes>
      </AppLayout>
    </Router>
  );
};

export default App;
