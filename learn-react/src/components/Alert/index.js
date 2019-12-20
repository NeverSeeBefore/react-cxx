import React from "react";

import "./index.css";
import { CSSTransition } from "react-transition-group";

export default function Alert(props) {
  return (
    <CSSTransition
      in={props.show}
      timeout={300}
      unmountOnExit
      classNames="alert"
      onEnter={() => {props.beforeEnter && props.beforeEnter()}}
      onExited={() => {props.afterExit && props.afterExit()}}
      addEndListener={(node, ) => {}}
    >
      <div className="alert-body">
        <div className="alert-header">
          <div className="alert-title">{props.title}</div>
          <div
            className="alert-close"
            onClick={() => {
              console.log("click X");
              props.onClose && props.onClose();
            }}
          ></div>
        </div>
        <p className="alert-msg">{props.msg}</p>
        <div
          className="alert-button"
          onClick={() => {
            console.log("click button");
            props.onClose && props.onClose();
          }}
        >
          Close
        </div>
      </div>
    </CSSTransition>
  );
}

Alert.defaultProps = {
  title: "Animation Alert message",
  msg: "This alert message is being transitioned in and out of the DOM."
};
