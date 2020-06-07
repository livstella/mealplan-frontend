import React from "react";
import axios from "axios";
import "./becomeUser.css";


function createUser(e) {
  e.preventDefault();
  const usernameInput = document.getElementById("name").value;
  const passwordInput = document.getElementById("password").value;
  const emailInput = document.getElementById("email").value;

  axios
    .post("https://dry-harbor-57855.herokuapp.com/user/create", {
      email: emailInput,
      name: usernameInput,
      password: passwordInput,
    })
    .then(function (response) {
      // handle success
      console.log(response);
      window.location.href = "/login";
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    });
}

export default function () {
  return (
    <div className="layout-wrapper">
      <h3>Want to be a user? Great!  You know how to internet, so you know what to do now.</h3>
      <form onSubmit={createUser}>
        <label>
          Username:
          <input type="text" name="Name" id="name" />
        </label>{" "}
        <br />
        <br />
        <label>
          Password:
          <input type="password" name="password" id="password" />
        </label>{" "}
        <br />
        <br />
        <label>
          Email (optional):
          <input type="text" name="email" id="email" />
        </label>{" "}
        <br />
        <br />
        <input type="submit" value="Submit" id="submit" />
      </form>
    </div>
  );
}