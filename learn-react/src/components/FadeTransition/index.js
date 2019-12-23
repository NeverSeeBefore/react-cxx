import React from "react";
import { CSSTransition } from "react-transition-group";
import "./index.css";

export default function FadeTransition(props) {
  return (
    <CSSTransition
      appear
      {...props}
      onEnter={node => {
        node.style.transition = `opacity ${props.timeout}ms`;
        props.onEnter && props.onEnter(node);
      }}
      onEntered={node => {
        node.style.transition = "";
        props.onExited && props.onEntered(node);
      }}
      onExit={node => {
        node.style.transition = `opacity ${props.timeout}ms`;
        props.onExit && props.onExit(node);
      }}
      onExited={node => {
        node.style.transition = "";
        props.onExited && props.onExited(node);
      }}
      classNames="fade"
    ></CSSTransition>
  );
}
FadeTransition.defaultProps = {
  timeout: 3000
};
