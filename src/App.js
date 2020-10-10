import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./components/Home/Home";
import Nav from "./components/Nav/Nav";
import { CartProvider } from "./global/CartContext";
import { ProductProvider } from "./global/ProductContext";

const App = () => {
  return (
    <Router>
      <ProductProvider>
        <CartProvider>
          <Nav></Nav>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
          </Switch>
        </CartProvider>
      </ProductProvider>
    </Router>
  );
};

export default App;
