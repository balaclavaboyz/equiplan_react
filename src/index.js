import React from "react";
import ReactDOM from "react-dom";
import App from "./App.js";
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/css.css";
import { BrowserRouter as Router } from "react-router-dom";
import ReactGA from 'react-ga'

ReactGA.initialize('UA-239549109-1')
ReactGA.pageview(window.location.pathname + window.location.search)
ReactDOM.render(
        <Router basename={process.env.PUBLIC_URL}>
            <App />
        </Router>
        , document.getElementById("root")
);
