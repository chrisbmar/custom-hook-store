import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import "./index.css";
import App from "./App";
import configureStore from "./hooksStore/products-store";
import configureCounterStore from "./hooksStore/counter-store";

configureStore();
configureCounterStore();

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
