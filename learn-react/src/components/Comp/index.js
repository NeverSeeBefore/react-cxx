import React from 'react';
import "./index.css"

export default function Comp (props) {
  console.log("Comp", props)
  return (
      <div className="container">
        <div>组件内容</div>
        <div><button onClick={props.click}>CLOSE</button></div>
      </div>
    )

}

