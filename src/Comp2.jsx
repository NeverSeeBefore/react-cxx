import React, { useCallback, useEffect, useRef, useState } from "react";

function Comp2(props) {
  const containerRef = useRef(null);
  const containerPositionRef = useRef({ x: 0, y: 0 });
  useEffect(() => {
    containerPositionRef.current.x = containerRef.current.offsetLeft;
    containerPositionRef.current.y = containerRef.current.offsetTop;
    console.log("ball ref", containerPositionRef);
  }, []);

  const ballPosition = {
    x: props.position.x - containerPositionRef.current.x,
    y: props.position.y - containerPositionRef.current.y,
  };
  console.log("ballPosition", ballPosition);

  return (
    <div
      ref={containerRef}
      style={{
        width: 400,
        height: 400,
        backgroundColor: "orange",
        position: "relative",
        overflow: "hidden",
      }}
      onMouseMove={props.handleMouseMove}
    >
      <h1>移动鼠标</h1>
      <div
        style={{
          width: 15,
          height: 15,
          backgroundColor: "white",
          position: "absolute",
          borderRadius: "50%",
          left: ballPosition.x,
          top: ballPosition.y,
        }}
      ></div>
    </div>
  );
}
export default Comp2;
