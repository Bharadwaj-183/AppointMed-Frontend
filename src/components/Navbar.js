import React from "react";
import { Link } from "react-router-dom";
import "../Navbar.css";

const NavBar = ({ setSelectedTab }) => {
  return (
    <div className="navbar">
      <Link to="/" onClick={() => setSelectedTab("welcome")}>
        Home
      </Link>
      <Link to="/booking" onClick={() => setSelectedTab("booking")}>
        Bookings
      </Link>
      <Link to="/stats" id="statsTab" onClick={() => setSelectedTab("stats")}>
        Stats
      </Link>
      <Link to="/doctorstats" onClick={() => setSelectedTab("doctorstats")}>
        DoctorStats
      </Link>
    </div>
  );
};

export default NavBar;
