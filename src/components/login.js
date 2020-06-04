import React from "react";
import axios from "axios";
import { useCookies } from "react-cookie";
import "./becomeUser.css";

function login(setCookie) {

  const usernameInput = document.getElementById("username").value;
  const passwordInput = document.getElementById("password").value;
  

  axios
    .post("http://localhost:3001/user/login", {
      username: usernameInput,
      password: passwordInput,
    })
    .then(function (response) {
      // handle success
      setCookie("auth-token", response.data);
      window.location.href = "/my-recipes";
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    });
}

export default function () {
    const [cookies, setCookie, removeCookie] = useCookies(["myCookies"]);

  return (
    <div className="layout-wrapper">
      <h3>Log in to save all the recipes!</h3>
      <form onSubmit={()=> login(setCookie)}>
        <label>
          Username:
          <input type="text" name="username" id="username" />
        </label>{" "}
        <br />
        <br />
        <label>
          Password:
          <input type="password" name="password" id="password" />
        </label>{" "}
        <br />
        <br />
        <input type="submit" value="Submit" id="submit" />
      </form>
    </div>
  );
}