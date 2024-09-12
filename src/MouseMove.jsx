import React, { useState } from "react";

function MouseMove(props) {
  const [position, setPosition] = useState({
    x: 0,
    y: 0,
  });

  // let interval = Date.now();
  const handleMouseMove = (e) => {
    // console.log('e', e);
    // let current = Date.now();
    // if (current - interval < 500) {  
    //   return;
    // }
    // interval = current;
    setPosition({
      x: e.clientX,
      y: e.clientY,
    });
  };

  return props.render ? props.render({position, handleMouseMove}) : null;
}

export default MouseMove;
