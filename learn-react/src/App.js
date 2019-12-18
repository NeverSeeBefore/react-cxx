import React, { useContext, useState, useMemo } from "react";
import "./App.css";
import useReducer from "./components/myHook/useReducer";

import AppUseMemo from "./AppUseMemo";

function App() {
  return (
    <div>
      <AppUseMemo></AppUseMemo>
      <TestMeMo></TestMeMo>
    </div>
  );
}

export default App;

function TestMeMo() {
  const [range, setRange] = useState({ min: 1, max: 10000 });
  const [n, setN] = useState(0);
  const list = [];
  for (let i = range.min; i < range.max; i++) {
    list.push(<Item key={i} value={i}></Item>);
  }
  // const list = useMemo(() => {
  //   const list = [];
  //   for (let i = range.min; i < range.max; i++) {
  //     list.push(<Item key={i} value={i}></Item>);
  //   }
  //   return list;
  // }, [range.min, range.max]);
  return (
    <div className="TestMemo">
      <ul>{list}</ul>
      <input
        type="number"
        value={n}
        onChange={e => {
          setN(e.target.value);
          // console.log(e, e.target.value);
        }}
      ></input>
    </div>
  );
}

function Item(props) {
  console.log("Item Render");
  return <li>{props.value}</li>;
}
