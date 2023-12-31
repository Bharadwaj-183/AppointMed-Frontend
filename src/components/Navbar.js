// import React from "react";
// import { Link } from "react-router-dom";

// const NavBar = ({ setSelectedTab }) => {
//   const navbarStyle = {
//     backgroundColor: "#f8f8f0", // Creamier shade of white
//     overflow: "hidden",
//     position: "fixed", // Fixed position to persist on scroll
//     top: 0,
//     width: "100%",
//     textAlign: "center",
//     padding: "20px", // 20px distance between each word
//     fontFamily: "Poppins", // Use the Poppins font
//     fontSize: "1.2em", // Slightly larger font size
//     zIndex: 1000, // Set a higher z-index to ensure it appears above other elements
//   };

//   const linkStyle = {
//     color: "#333", // Dark color for text
//     textDecoration: "none",
//     padding: "0 20px", // 20px distance between each word
//   };

//   const handleTabClick = (tab) => {
//     setSelectedTab(tab);
//   };

//   return (
//     <div style={navbarStyle} className="navbar">
//       <Link to="/" style={linkStyle} onClick={() => handleTabClick("welcome")}>
//         Home
//       </Link>
//       <Link
//         to="/booking"
//         style={linkStyle}
//         onClick={() => handleTabClick("booking")}
//       >
//         Booking
//       </Link>
//       <Link
//         to="/stats"
//         style={linkStyle}
//         onClick={() => handleTabClick("stats")}
//       >
//         Stats
//       </Link>
//     </div>
//   );
// };

// export default NavBar;

// NavBar.js

import React from "react";
import { Link } from "react-router-dom";
import "../Navbar.css"; // Import the CSS file

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
