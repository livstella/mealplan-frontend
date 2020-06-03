import React, { useState } from "react";
import { Link, Switch, Route } from "react-router-dom";
import { Anchor, Box, Grommet, Header, Nav, Button } from "grommet";
import { grommet } from "grommet/themes";
import "./App.css";
import Recipes from "./components/recipe";
import BecomeUser from "./components/becomeUser";

function App() {
  const [savedRecipes, setSavedRecipes] = useState([]);

  function pushFunction() {
    setSavedRecipes([
      ...savedRecipes,
      {
        value: 1,
      },
    ]);
    console.log(savedRecipes);
  }

  return (
    <div className="App">
      <Grommet theme={grommet}>
        <Header background="dark-1" pad="medium">
          <Box direction="row" align="center" gap="small">
            <Anchor color="white" href="#">
              Your Meal Plan
            </Anchor>
          </Box>
          <Nav direction="row">
            <Link to="/become-user">
              {" "}
              <Button primary label="Sign me up!" />{" "}
            </Link>
            <Link to="/">
              {" "}
              <Button primary label="home" />
            </Link>
            <Link to="/test">
              {" "}
              <Button primary label="Test" />{" "}
            </Link>
          </Nav>
        </Header>
      </Grommet>

      <Switch>
        <Route exact path="/">
          <div class="masonry-wrapper">
            <div class="masonry">
              <Recipes />
            </div>
          </div>
        </Route>
        <Route path="/become-user">
          <BecomeUser />
        </Route>
        <Route path="/login">
          <div>Login</div>
        </Route>
      </Switch>
    </div>
  );
}

export default App;

//      <div><button onClick={pushFunction}>Save to my recipes</button></div>
