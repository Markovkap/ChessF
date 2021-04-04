import React from "react";
import ReactDOM from "react-dom";

import { Chess } from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <Chess />
  </React.StrictMode>,
  rootElement
);
