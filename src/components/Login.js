import "../Login.css";
import axois from "axios";
import { useState } from "react";

const Login = (props) => {
  const [error, setError] = useState("");
  const [error2, setError2] = useState("");

  const handleLogin = async (e) => {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    e.preventDefault();
    await axois
      .post("https://appoint-med-backend.vercel.app/login", {
        email: email,
        password: password,
      })
      .then((res) => {
        if (res.data.status) {
          localStorage.setItem("token", res.data.message);
          props.setLoggedIn(res.data.message);
        } else {
          setError(res.data.message);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    const email = document.getElementById("signupemail").value;
    const password1 = document.getElementById("signuppassword1").value;
    const password2 = document.getElementById("signuppassword2").value;
    if (password1 === password2) {
      await axois
        .post("https://appoint-med-backend.vercel.app/signup", {
          email: email,
          password: password1,
        })
        .then((res) => {
          if (res.data.status) {
            localStorage.setItem("token", res.data.message);
            props.setLoggedIn(res.data.message);
          } else {
            setError2(res.data.message);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      setError2("Passwords does not match");
    }
  };

  return (
    <div className="logincontainer">
      <div>
        <h1>Welcome to AppointMed!!</h1>
        <form
          id="loginForm"
          style={{ marginRight: "20px" }}
          onSubmit={handleLogin}
        >
          <h2>Login Form</h2>
          <label>Email:</label>
          <input
            className="signupemail"
            type="email"
            id="email"
            required={true}
          />
          <label>Password:</label>
          <input
            className="signuppassword"
            type="password"
            id="password"
            required={true}
          />
          <button className="submitbutton" type="submit">
            Submit
          </button>
          {error ? <p className="errortext">{error}</p> : ""}
        </form>
      </div>
      <div>
        <label className="newuserlabel">or New User?</label>
      </div>
      <div>
        <form id="signupForm" onSubmit={handleSignup}>
          <h2>Signup Form</h2>
          <label>Email:</label>
          <input
            className="signupemail"
            id="signupemail"
            type="email"
            required={true}
          />
          <label>Password:</label>
          <input
            className="signupemail"
            id="signuppassword1"
            type="password"
            required={true}
          />
          <label>Confirm Password:</label>
          <input
            id="signuppassword2"
            className="signuppassword"
            type="password"
            required={true}
          />
          <button className="submitbutton" type="submit">
            Submit
          </button>
          {error2 ? <p className="errortext">{error2}</p> : ""}
        </form>
      </div>
    </div>
  );
};

export default Login;
