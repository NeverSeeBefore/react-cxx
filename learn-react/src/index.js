import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
// import App from './App';
import MyFunComp from "./MyFunComp";
import MyClassComp from "./MyClassComp";
const JSX = (
  <>
    <MyFunComp number="1" enable obj={{a:'a',b:'b'}} />
    <hr></hr>
    <MyFunComp number="2"></MyFunComp>
    <hr></hr>
    <MyClassComp></MyClassComp>
    <hr></hr>
  </>
);

ReactDOM.render(JSX, document.getElementById("root"));
