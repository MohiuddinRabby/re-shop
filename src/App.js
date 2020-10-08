import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CategoryNav from "./components/Header/CategoryNav";
import Header from "./components/Header/Header";
const App = () => {
  return (
    <div>
      <Router>
        <Header></Header>
        <CategoryNav />
        <Switch></Switch>
      </Router>
    </div>
  );
};

export default App;
