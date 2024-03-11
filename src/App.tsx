import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";

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
          <Route
            path={"/"}
            element={<Navigate to="/aspire-code-challenge/cards" replace />}
          />
          <Route
            path={"/aspire-code-challenge"}
            element={<Navigate to="/aspire-code-challenge/cards" replace />}
          />
          <Route path={"/aspire-code-challenge/home"} element={<Home />} />
          <Route path={"/aspire-code-challenge/cards"} element={<Cards />} />
          <Route
            path={"/aspire-code-challenge/payments"}
            element={<Payments />}
          />
          <Route path={"/aspire-code-challenge/credit"} element={<Credit />} />
          <Route
            path={"/aspire-code-challenge/settings"}
            element={<Settings />}
          />
        </Routes>
      </AppLayout>
    </Router>
  );
};

export default App;
