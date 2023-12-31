import React, { useEffect, useState } from "react";
import "../WelcomePage.css";

import { Link } from "react-router-dom";

const WelcomePage = () => {
  // Retrieve the login state from localStorage on component mount
  const [loggedIn, setLoggedIn] = useState(
    localStorage.getItem("loggedIn") === "true"
  );

  useEffect(() => {
    // localStorage.setItem("loggedIn", false);
    const timerId = setTimeout(() => {
      const welcomeHeading = document.querySelector(".welcome-heading");
      if (welcomeHeading) {
        welcomeHeading.classList.add("show");
      }
    }, 500);

    return () => clearTimeout(timerId);
  }, []);

  const handleSubmit = () => {
    setLoggedIn(true);
    localStorage.setItem("loggedIn", "true");

    window.location.href = "/";
  };

  return (
    <div>
      {loggedIn ? (
        <div>
          <h1 className="welcome-heading">Welcome to AppointMed!</h1>
          <p>Book your doctor in a few clicks.</p>
          <p>
            <Link
              to="/logout"
              onClick={() => {
                localStorage.setItem("loggedIn", false);
                window.location.href = "/";
              }}
            >
              Logout
            </Link>
          </p>
        </div>
      ) : (
        <div>
          <form style={{ marginRight: "20px" }}>
            <h2>Login Form</h2>
            <label>Email:</label>
            <input type="email" required />
            <label>Password:</label>
            <input type="password" required />
            <button type="button" onClick={handleSubmit}>
              Submit
            </button>
          </form>
          or New User?
          <form>
            <h2>Signup Form</h2>
            <label>Email:</label>
            <input type="email" required />
            <label>Password:</label>
            <input type="password" required />
            <label>Confirm Password:</label>
            <input type="password" />
            <button type="button" onClick={handleSubmit}>
              Submit
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default WelcomePage;
