import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Anchor, Box, Grommet, Header, Nav, Button } from "grommet";
import { grommet } from "grommet/themes";
import './App.css';
import Recipe from './components/recipe'






function filterFunction(){

}



function App() {  

  return (
    <div className="App">
    <Router>
        <Grommet theme={grommet}>
        <Header background="dark-1" pad="medium">
        <Box direction="row" align="center" gap="small">
            <Anchor color="white" href="#">
             Your Meal Plan
            </Anchor>
        </Box>
        <Nav direction="row">
            <p>Filter by your favourite</p>
            <Button primary label="Breakfast" onClick={filterFunction}  />
            <Link to="/"> <Button primary label="home"  /></Link>
            <Button primary label="Dinner"  />
            <Button primary label="Dessert"  />
        </Nav>
        </Header>
        </Grommet>
        <Switch>
            <Route path="/">
            <div class="masonry-wrapper">
        <div class="masonry">
            <Recipe />
            </div>
            </div>
          </Route>
        </Switch>
    </Router>


    </div>
  );
}

export default App;
