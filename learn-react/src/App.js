import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [n, setN] = useState(0);
  // document.title = `计数器${n}`
  useEffect(() => {
    document.title = `计数器${n}`;
  });
  return (
    <div className="App">
      <span>{n}</span>
      <button
        onClick={() => {
          setN(n + 1);
        }}
      >
        +
      </button>
      <div>
        <span>可移动的块</span>
        <div>
          <MovableBlock></MovableBlock>
        </div>
      </div>
    </div>
  );
}
export default App;

function MovableBlock(props) {
  useEffect(() => {
    console.log('副作用函数')

    return () => {
      console.log('清理函数');
    }
  });
  return (
    <div
      style={{
        width: 100,
        height: 100,
        backgroundColor: "orange",
        position: "fixed",
        top: "0",
        left: "0"
      }}
    ></div>
  );
}
