import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import AppLayout from "./components/AppLayout";
import Home from "./modules/Home";
import Cards from "./modules/Cards";
import Payments from "./modules/Payments";
import Credit from "./modules/Credit";
import Settings from "./modules/Settings";

import { INITIAL_CARDS } from "./constants";

import "./App.css";

const App: React.FC = () => {
  // for mock purpose...
  // to have some initial cards on app load, add mock cards data to local storage
  useEffect(() => {
    if (!localStorage.getItem("mockData")) {
      localStorage.setItem("mockData", JSON.stringify(INITIAL_CARDS));
    }
  }, []);

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
