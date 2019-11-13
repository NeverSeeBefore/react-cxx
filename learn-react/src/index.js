import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import Tick from "./Component/Tick";
import A from './Component/Test'

let num = 5;
// function start() {
//   const timer = setInterval(() => {
//     num --;
    // ReactDOM.render(<Tick number={num}></Tick>, document.getElementById("root"));
//     if(num <= 0){
//       clearInterval(timer);
//     }
//   }, 1000);
// }
// start();

ReactDOM.render(<><A test="sssss"></A><Tick number={num}></Tick></>, document.getElementById("root"));
