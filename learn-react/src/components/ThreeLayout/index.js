import React from "react";
import "./index.css";

export default function ThreeLayOut(props) {
  const defaultProps = {
    leftWidth: 200,
    rightWdth: 200,
    minWidth: 800,
    leftGap: 0,
    rightGap: 0
  };
  const datas = Object.assign({}, defaultProps, props);
  return (
    <div
      className="three-layout"
      style={{
        minWidth: datas.minWidth
      }}
    >
      <div className="main">{props.children}</div>
      <div
        className="aside-left"
        style={{
          width: datas.leftWidth,
          marginRight: datas.leftGap + 'px'
        }}
      >
        {props.left}
      </div>
      <div
        className="aside-right"
        style={{
          width: datas.leftWidth,
          marginLeft: datas.rightGap + 'px'
        }}
      >
        {props.right}
      </div>
    </div>
  );
}
