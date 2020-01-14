import "./index.scss";
import React from "react";

export default function Loading(props) {
  {
    /* <div className="loading-container">
        <Leaf name="run" duration="3.6s" timingFunction="linear" animationDelay="+225" iterationCount="infinite" direction="normal"/>
        <div className="center"></div>
      </div> */
  }
  {
    /* <div className="loading-container">
        <Leaf name="run" duration="3.6s" timingFunction="ease-in-out" animationDelay="+225" iterationCount="infinite" direction="normal"/>
        <div className="center"></div>
      </div> */
  }
  if(props.isLoading){
    return (
      <div className="loading-container">
        <LeafB></LeafB>
        <div className="center"></div>
      </div>
    );
  }else{
    return null
  }
}

function Leaf(props) {
  const animation = `${props.name} ${props.duration} ${props.timingFunction} ${props.iterationCount} ${props.direction}`;
  const list = [];
  for (let i = 0; i < 8; i++) {
    list.push(
      <div
        className="leaf leafA"
        key={i}
        style={{
          animation: animation,
          animationDelay:
            (props.animationDelay.indexOf("+") > -1
              ? i * parseInt(props.animationDelay)
              : props.animationDelay) + "ms"
        }}
      ></div>
    );
  }
  return <>{list}</>;
}

function LeafB(props) {
  const list = [];
  for (let i = 0; i < 8; i++) {
    list.push(
      <div
        className="leaf leafB"
        key={i}
        style={{
          transform: "rotate(" + i * 45 + "deg) translate(0, -30px)",
          animation: "runB 1s " + i * 70 + "ms infinite"
        }}
      ></div>
    );
  }
  return <>{list}</>;
}
