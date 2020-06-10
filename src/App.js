import React from 'react';
import { Link, Switch, Route } from "react-router-dom";
import { Anchor, Box, Grommet, Header, Nav, Button } from "grommet";
import { grommet } from "grommet/themes";
import axios from "axios";
import { useCookies } from "react-cookie";
//import './App.css';
import Recipes from './components/recipe';
import BecomeUser from './components/becomeUser';
import LogIn from './components/login'
import MyRecipes from './components/myRecipes'


const cookieVerify = (token) => {
  const config = {
    headers: {
      authorization: token,
    },
  };
  axios
    .get("https://dry-harbor-57855.herokuapp.com/user/test", config)
    .then(function (response) {
      // handle success
      window.location.href = "/my-recipes";
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    });
};


function App() {  
  const [cookies, setCookie, removeCookie] = useCookies(["myCookies"]);

  return (
    <div className="App">  
        <Grommet theme={grommet}>
          <Header background="dark-1" pad="medium">
            <Box direction="row" align="center" gap="small">
            <Anchor color="white" href="/"> Your Meal Plan </Anchor>
            </Box>
          <Nav direction="row">
            <Link to="/"> <Button primary label="Home" color="#F26157" /></Link>
            <Link to="/become-user"> <Button primary label="Sign me up!"color="#F26157" /> </Link>
            <Link to="/login">  <Button primary label="Log in" color="#F26157"/> </Link>
            <Button primary label="My Recipes" color="#F26157" onClick={() => cookieVerify(cookies["auth-token"])} />
            <Button primary label="Log Out" color="#F26157" />
          </Nav>
          </Header>
        </Grommet>
        
        <Switch>
            <Route exact path="/">
            <div className="masonry-wrapper">
        <div className="masonry">
            <Recipes />
            </div>
            </div>
          </Route>
          <Route path="/become-user">
            <BecomeUser />
          </Route>
          <Route path="/login">
            <LogIn />
          </Route>
          <Route path="/my-recipes">
        <div className="masonry-wrapper">
        <div className="masonry">
            <MyRecipes />
            </div>
            </div>
          </Route>
        </Switch>
 


    </div>
  );
}

export default App;