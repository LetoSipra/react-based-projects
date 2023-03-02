import React from "react";
import XX from "./components/drum machine";
//import XX from './newApp'
import "./index.css";
import {createRoot} from "react-dom/client";
const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  //<React.StrictMode>
    <XX />
  //</React.StrictMode>
);
