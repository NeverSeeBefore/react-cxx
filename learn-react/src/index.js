import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import StudentList from "./components/StudentList";

async function fetchAllStudents() {
  const stus = await fetch(
    "http://api.duyiedu.com/api/student/findAll?appkey=" +
      "18743119027_1551866612751"
  )
    .then(resp => resp.json())
    .then(resp => resp.data);
  return stus;
}
async function render() {
    ReactDOM.render("正在加载中。。。", document.getElementById("root"));
    const stus = await fetchAllStudents();
    ReactDOM.render(<StudentList stus={stus} />, document.getElementById("root"));
}
render();


