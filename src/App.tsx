import React, { useEffect, useState } from "react";
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
  const [loader, setLoader] = useState(false);

  // for mock purpose...
  // to have some initial cards on app load, add mock cards data to local storage
  useEffect(() => {
    setLoader(true);

    if (!localStorage.getItem("mockData")) {
      localStorage.setItem("mockData", JSON.stringify(INITIAL_CARDS));
    }
    setTimeout(() => {
      if (!localStorage.getItem("mockData")) {
        localStorage.setItem("mockData", JSON.stringify(INITIAL_CARDS));
      }
      setLoader(false);
    }, 1000);
  }, []);

  if (loader) {
    return (
      <div
        style={{
          position: "fixed",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        Loading… Please reload if you’re running out of patience!
      </div>
    );
  }

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
