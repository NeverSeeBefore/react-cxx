import React, { useState } from "react";
import "./App.css";

function App() {
  const arr = useState(0); // 使用一个状态,状态的默认值为0;
  // 函数的返回值是一个数组,该数组一定包含两项
  const n = arr[0]; // 1. 第一项是状态的值
  const setN = arr[1]; // 2. 改变状态的方法
  // const [n, setN] = useState(0) // 常用写法
  return (
    <div className="App">
      <button
        onClick={() => {
          setN(n => n - 1);
          setN(n => n - 1);
        }}
      >
        -
      </button>
      <span>{n}</span>
      <button
        onClick={() => {
          setN(n + 1);
        }}
      >
        +
      </button>
    </div>
  );
}
export default App;
