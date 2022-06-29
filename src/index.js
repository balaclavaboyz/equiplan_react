import React from "react";
import ReactDOM from "react-dom";
import App from "./app";
import "bootstrap/dist/css/bootstrap.min.css";
import './assets/css.css'
import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.render(
  <Router basename={process.env.PUBLIC_URL}>
    <App />
  </Router>,

  document.getElementById("root")
);
