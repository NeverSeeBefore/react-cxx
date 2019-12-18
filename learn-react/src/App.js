import React, { useContext, useState } from "react";
import "./App.css";
import useReducer from "./components/myHook/useReducer"; 

import AppUseCallBack from './AppUseCallBack';

function App() {
  return (
    <div>
      <Parent></Parent>
      <AppUseCallBack></AppUseCallBack>
    </div>
  );
}

export default App;

function Parent() {
  const [txt, setTxt] = useState(123);
  const [n, setN] = useState(0);
  console.log("Parent Render");
  return (
    <>
      {/* 每次改变input， 会导致重新渲染所有子组件 */}
      {/* 每次渲染都会导致组件绑定的函数地址变化，因此，有渲染优化的子组件可能失去优化功能 */}
      {/* 此时就到了 useCallBack 登场了*/}
      <Test
        txt={txt}
        onClick={() => {
          setTxt(txt + 1);
        }}
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
