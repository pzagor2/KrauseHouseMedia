import "windi.css"; //eslint-disable-line
import "./main.css";

import { StrictMode } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { getAnalytics } from "firebase/analytics";

import App from "./App";
import firebaseConfig from "./firebaseConfig";
import { initializeApp } from "firebase/app";

// only use analytics if not on localhost
if (location.hostname != "localhost") {
  initializeApp(firebaseConfig);
  getAnalytics();
}

ReactDOM.render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
  document.getElementById("root")
);
