import React from "react";
import "./styles/styles.scss";
import Nav from "./Nav";
import Home from "./Home";
import Cart from "./Cart";
import { BrowserRouter, Route, Switch } from "react-router-dom";

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/cart" component={Cart} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}
