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
  const [n, setN] = useState(5);
  useEffect(() => {
    // console.log("副作用函数");
    if(n === 0){
      return ;
    }
    setTimeout(() => {
      setN(n - 1);     
    }, 500)
    return () => {
      // console.log("清理函数");
    };
  }, [n]);
  // 使用空数组作为依赖项,此时副作用函数指挥运行一次
  // });
  return (
    <div>
      <h1>{n}</h1>
      <button onClick={() => {
        setN(n + 1);
      }}>N+1</button>
    </div>
  );
}
