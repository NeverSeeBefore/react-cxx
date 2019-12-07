import React, { Component } from "react";
import MovablePanel from "./MovablePanel";
import ShowMousePoint from "./ShowMousePoint";
import MouseListener from "./MouseListener";
import WithMouseListener from "./withMouseListener";

function Point(props) {
  return <div> left: {props.left}  top: {props.top} </div>
}
function MoveDiv(props) {
  // console.log(props);
  return (
      <div
        className="box"
        style={{ left: props.left, top: props.top }}
      ></div>
    );
}
const MouseMoveDiv = WithMouseListener(MoveDiv);
const MousePoint = WithMouseListener(Point);
class Test extends Component {
  renderPoint = mouse => {
    return <div> left: {mouse.left}  top: {mouse.top} </div>
  }
  renderDiv = mouse => {
    return (
      <div
        className="box"
        style={{ left: mouse.left, top: mouse.top }}
      ></div>
    );
  }
  render() {
    return (
      <div>
        {/* normal */}
        {/* <MovablePanel></MovablePanel>
        <ShowMousePoint></ShowMousePoint> */}
        {/* render prop */}
        {/* <MouseListener render={this.renderPoint}></MouseListener> */}
        {/* <MouseListener render={this.renderDiv}></MouseListener> */}
        {/* HOC */}
        <MouseMoveDiv></MouseMoveDiv>
        <MousePoint></MousePoint>
      </div>
    );
  }
}

export default Test;
