import React, { useState } from "react";

export default function withMouseMove(Comp) {
  return function (props) {
    const [position, setPosition] = useState({
      x: 0,
      y: 0,
    });

    const handleMouseMove = (e) => {
      // console.log('e', e);
      setPosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    return (
      <Comp {...props} position={position} handleMouseMove={handleMouseMove} />
    );
  };
}
