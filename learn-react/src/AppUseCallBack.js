import React, { useContext, useState, useCallback } from "react";
import "./App.css";
import useReducer from "./components/myHook/useReducer";

function AppUseCallBack() {
  return (
    <div>
      <Parent></Parent>
    </div>
  );
}

export default AppUseCallBack;

function Parent() {
  const [txt, setTxt] = useState(123);
  const [n, setN] = useState(0);
  const handleClick = useCallback(() => {
    setTxt(txt + 1);
  }, [txt])
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
