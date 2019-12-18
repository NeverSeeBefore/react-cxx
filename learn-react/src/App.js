import React, { useContext, useState, useMemo, useEffect, useRef } from "react";
import "./App.css";

function App() {
  return (
    <div>
      <TestRef></TestRef>
      <TestCreateRef></TestCreateRef>
      {/* <TestEffect></TestEffect> */}
    </div>
  );
}

export default App;
window.arr = [];
function TestRef() {
  
  const inpRef = useRef();
  window.arr.push(inpRef);
  const [n, setN] = useState(0);
  return (
    <div>
      <input ref={inpRef}></input>
      <button
        onClick={() => {
          console.log(inpRef.current.value);
          setN(n + 1);
        }}
      >
        useRef
      </button>
    </div>
  );
}
function TestCreateRef() {
  
  const inpRef = React.createRef();
  window.arr.push(inpRef);
  const [n, setN] = useState(0);
  return (
    <div>
      <input ref={inpRef}></input>
      <button
        onClick={() => {
          console.log(inpRef.current.value);
          setN(n + 1);
        }}
      >
        createRef
      </button>
    </div>
  );
}

// let timer = null;
function TestEffect() {
  const [n, setN] = useState(3);
  const timerRef = useRef();
  useEffect(() => {
    if(n === 0){
      return;
    }
    timerRef.current = setTimeout(() => {
      setN(n - 1);
    }, 1000)
    return () => {
      clearTimeout(timerRef.current);
    }
  }, [n])

  return <div>{n}</div>
}
