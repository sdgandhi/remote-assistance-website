import React, { Component } from "react";
import { render } from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ArraNavbar from "./Navbar";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Footer from "./Footer";
import Beta from "./Beta";
import "./index.css";
import Config from "./config.json";
import ReactGA from 'react-ga';

class App extends Component {
	constructor(props) {
		super(props);

		const analyticsCode = Config.google_analytics;
		ReactGA.initialize(analyticsCode, {
			debug: false
		});
	}

  render() {
	  const logPageView = () => {
		  ReactGA.pageview(window.location.pathname + window.location.search);
		  return null;
	  };

    return (
      <div>
	      <Route component={logPageView} />
        <ArraNavbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/beta" component={Beta} />
        </Switch>
        <Footer />
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
