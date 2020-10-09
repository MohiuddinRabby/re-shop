import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./components/Home/Home";
import CategoryNav from "./components/Nav/CategoryNav";
import Nav from "./components/Nav/Nav";
const App = () => {
  return (
    <Router>
      <Nav></Nav>
      <CategoryNav></CategoryNav>
      <Switch>
        <Route exact path="/">
          <Home></Home>
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
