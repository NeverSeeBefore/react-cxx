import React from "react";
import ReactDOM from "react-dom";

export default function MyFunComp(props) {
  return (
    <div>
      组件内容, 显示一个数字: {props.number}
      {console.log("this", this)}
      {console.log("props", props)}
      <p>{props.enable ? props.obj.a : "disable"}</p>
      <p>props不能更改</p>
    </div>
  );
}
