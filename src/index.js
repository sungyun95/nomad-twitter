import React from "react";
import ReactDOM from "react-dom/client";
import App from "components/App";
import { fbase } from "fbase";
import "./style.css";

console.log("fbase :", fbase);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
