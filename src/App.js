import React, { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";

import WelcomePage from "./components/WelcomePage";
import BookingPage from "./components/Booking";
import StatsPage from "./components/Stats";
import DoctorStats from "./components/DoctorStats";
import NavBar from "./components/Navbar";
import "../src/App.css";
import "../src/WelcomePage.css";

const App = () => {
  const [selectedTab, setSelectedTab] = useState("welcome");
  const [isLoggedIn, setLoggedIn] = useState(
    localStorage.getItem("token") !== ""
  );

  return (
    <Router>
      <div className="appcontainer">
        <NavBar setSelectedTab={setSelectedTab} isLoggedIn={isLoggedIn} />

        <span className="content-container">
          {selectedTab === "welcome" && (
            <WelcomePage setLoggedIn={setLoggedIn} />
          )}
          {selectedTab === "booking" && <BookingPage />}
          {selectedTab === "stats" && <StatsPage />}
          {selectedTab === "doctorstats" && <DoctorStats />}
        </span>
      </div>
    </Router>
  );
};

export default App;
