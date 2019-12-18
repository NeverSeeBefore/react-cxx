import React, { useContext, useState, useCallback, useMemo } from "react";
import "./App.css";
import useReducer from "./components/myHook/useReducer";

function AppUseMemo() {
  return (
    <div>
      <Parent></Parent>
    </div>
  );
}

export default AppUseMemo;

function Parent() {
  const [txt, setTxt] = useState(123);
  const [n, setN] = useState(0);
  // 第一次运行,会将第一个参数执行的返回结果当作自己的返回结果，
  // 第二次，如果依赖项没有变化，不会运行第一个参数，直接返回上次运行返回的结果
  const handleClick = useMemo(() => {
    return () => setTxt(txt + 1);
  }, [txt])
  // 与useCallBack的区别就是
  // useCallBack返回的是函数，而useMemo返回的是结果
  // useMemo更加通用，

  console.log("Parent Render");
  return (
    <>
      <Test
        txt={txt}
        onClick={handleClick}
      ></Test>
      <input
        type="number"
        value={n}
        onChange={e => {
          setN(parseInt(e.target.value));
        }}
      ></input>
    </>
  );
}

class Test extends React.PureComponent {
  render() {
    console.log("Test渲染");
    return (
      <div>
        {this.props.txt}
        <button onClick={this.props.onClick}>change</button>
      </div>
    );
  }
}
