import React, { Component } from "react";
import { render } from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ArraNavbar from "./ArraNavbar";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";

class App extends Component {
  render() {
    return (
      <div>
        <ArraNavbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/contact" component={Contact} />
        </Switch>
      </div>
    );
  }
}

render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
