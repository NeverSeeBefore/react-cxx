import React, {
  useState,
  useRef,
  useImperativeHandle,
  useLayoutEffect,
  useEffect
} from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div>LayoutEffectHook</div>
      <TestUseEffect></TestUseEffect>
      <TestUseLayoutEffect></TestUseLayoutEffect>
    </div>
  );
}
export default App;

function TestUseEffect() {
  const [n, setN] = useState(0);
  const h1Ref = useRef();
  // 因为useEffect 的执行时间再页面渲染完成之后 ，所以，会闪动一下
  useEffect(() => {
    h1Ref.current.innerText = Math.random().toFixed(2);
  })

  return (
    <div>
      <button onClick={() => {
        setN(n + 1);
      }}>effectHookchange</button>
      <h1 ref={h1Ref}>{n}</h1>
    </div>
  );
}

function TestUseLayoutEffect() {
  const [n, setN] = useState(0);
  const h1Ref = useRef();
  // 因为useEffect 的执行时间再页面渲染完成之后 ，所以，会闪动一下
  useLayoutEffect(() => {
    h1Ref.current.innerText = Math.random().toFixed(2);
  })

  return (
    <div>
      <button onClick={() => {
        setN(n + 1);
      }}>layoutEffectHookchange</button>
      <h1 ref={h1Ref}>{n}</h1>
    </div>
  );
}