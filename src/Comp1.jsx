import React, { useCallback, useState } from "react";

function Comp1(porps) {

  return (
    <div
      style={{
        width: 400,
        height: 400,
        backgroundColor: "orange",
        position: "relative",
        overflow: "hidden",
      }}
      onMouseMove={porps.handleMouseMove}
    >
      <h1>移动鼠标</h1>
      <p>
        当前位置
        <br />
        x:{porps.position.x}
        <br />
        y:{porps.position.y}
        <br />
      </p>
    </div>
  );
}

export default Comp1