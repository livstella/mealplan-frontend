import React from "react";
import axios from "axios";
import {Button, Form, FormField } from "grommet";
import { useCookies } from "react-cookie";
import "./styles/login.css";


function login(setCookie) {

  const usernameInput = document.getElementById("username").value;
  const passwordInput = document.getElementById("password").value;
  
  

  axios
    .post("dry-harbor-57855.herokuapp.com/user/login", {
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
      <div className="form-wrapper">
      <Form onSubmit={()=> login(setCookie)}>
        <FormField type="text" name="username" id="username" label="Username:" />
        <br />
        <br />
        <FormField type="password" name="password" id="password" label="Password:" />
        <br />
        <br />
        <Button type="submit" label="Submit" id="submit"primary={true} color="#F26157" />
      </Form>
      </div>
    </div>
  );
}