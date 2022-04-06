import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router } from "react-router-dom";
import "./assets/my.css";

import ReactGA from "react-ga";

ReactGA.initialize("UA-170028058-4");
ReactGA.pageview(window.location.pathname + window.location.search);

ReactDOM.render(
  <Router basename={process.env.PUBLIC_URL}>
    <App />
  </Router>,

  document.getElementById("root")
);
