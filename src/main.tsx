import "windi.css"; //eslint-disable-line
import "./main.css";

import { StrictMode } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { logEvent } from "firebase/analytics";

import App from "./App";
import analytics from "./analytics";

!import.meta.env.VITE_DEBUG && logEvent(analytics, "ping");

ReactDOM.render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
  document.getElementById("root")
);
