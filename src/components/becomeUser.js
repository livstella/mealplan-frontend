import React from 'react';
import './becomeUser.css'
import { Button } from "grommet";
import { grommet } from "grommet/themes";



const axios = require('axios').default;



function createUser (){
    const usernameInput = document.getElementById("username").value;
    const passwordInput = document.getElementById("password").value;
    const emailInput = document.getElementById("email").value;

}


export default function(){
    

    return(
        <div className="layout-wrapper">
            <h3>Want to be a user? Great! Just fill in your info:</h3>
            <form>
                <label>
                    Username:
                    <input type="text" name="Name" id="name" />
                </label> <br/><br/>
                <label>
                    Password:
                    <input type="password" name="password" id="password" />
                </label> <br/><br/>
                <label>
                    Email (optional):
                    <input type="text" name="email" id="email" />
                </label> <br/><br/>
                <Button type="submit" primary label="Submit"/>
                <input type="submit" value="Submit" id="submit"/>
            </form>

     </div>
    )}