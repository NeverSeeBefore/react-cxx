import React from "react";

export default function Home(props, ctx) {
  console.log("Home created", props, ctx);
  const ele = React.createElement("div", null, "react");
  console.log("ele", ele);
  return (
    <div className="comp-box">
      <h1>Home</h1>
      <div>from: {props.from}</div>
      <div>date: {props.date}</div>
      {ele}
      <div>
        jsx 的本质是 react.createElement 的语法糖<br></br>jsx 代码最终将会转化为
        react.createElement 的形式
      </div>
    </div>
  );
}
