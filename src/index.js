import React from "react";
import ReactDOM from "react-dom";
import "water.css/out/dark.min.css";
import App from "./components/app";
// eslint-disable-next-line import/no-webpack-loader-syntax
import worker from "workerize-loader!./worker";
window.factorialWorker = worker;

ReactDOM.render(<App />, document.getElementById("root"));
