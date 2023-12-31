import React, { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";

import WelcomePage from "./components/WelcomePage";
import BookingPage from "./components/Booking";
import StatsPage from "./components/Stats";
import DoctorStats from "./components/DoctorStats";
import NavBar from "./components/Navbar";

import "../src/WelcomePage.css";

const App = () => {
  const [selectedTab, setSelectedTab] = useState("welcome");

  return (
    <Router>
      <div style={{ paddingTop: "80px" }}>
        <NavBar setSelectedTab={setSelectedTab} />

        <div className="content-container" style={{ paddingTop: "10px" }}>
          {selectedTab === "welcome" && <WelcomePage />}
          {selectedTab === "booking" && <BookingPage />}
          {selectedTab === "stats" && <StatsPage />}
          {selectedTab === "doctorstats" && <DoctorStats />}
        </div>
      </div>
    </Router>
  );
};

export default App;
