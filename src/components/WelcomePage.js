import React, { useEffect, useState } from "react";
import "../WelcomePage.css";

import { Link } from "react-router-dom";
import Login from "./Login";
import axios from "axios";

const WelcomePage = () => {
  // Retrieve the login state from localStorage on component mount
  const [loggedIn, setLoggedIn] = useState("");
  // var token = "";
  useEffect(() => {
    const token = localStorage.getItem("token");
    console.log(token);
    if (token !== null) {
      axios
        .post("http://localhost:3001/validatetoken", { token: token })
        .then((res) => {
          console.log(res.data);
          if (res.data.valid) {
            setLoggedIn(token);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, []);
  // useEffect(() => {
  //   // localStorage.setItem("loggedIn", false);
  //   const timerId = setTimeout(() => {
  //     const welcomeHeading = document.querySelector(".welcome-heading");
  //     if (welcomeHeading) {
  //       welcomeHeading.classList.add("show");
  //     }
  //   }, 500);

  //   return () => clearTimeout(timerId);
  // }, []);

  // const handleSubmit = () => {
  //   setLoggedIn(true);
  //   localStorage.setItem("loggedIn", "true");

  //   window.location.href = "/";
  // };

  return (
    <div className="welcomecontainer">
      {loggedIn ? (
        <div>
          <h1 className="welcome-heading">Welcome to AppointMed!</h1>
          <p>Book your doctor in few clicks.</p>

          {loggedIn ? (
            <p>
              {" "}
              <Link
                to="/logout"
                onClick={() => {
                  localStorage.setItem("token", "");
                  window.location.href = "/";
                }}
              >
                Logout
              </Link>
            </p>
          ) : (
            <p>
              {" "}
              <Link
                to="/logout"
                onClick={() => {
                  localStorage.setItem("loggedIn", false);
                  window.location.href = "/login";
                }}
              >
                Login
              </Link>
            </p>
          )}
        </div>
      ) : (
        <Login setLoggedIn={setLoggedIn} />
      )}
    </div>
  );
};

export default WelcomePage;
