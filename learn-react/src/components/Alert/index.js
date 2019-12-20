import React from "react";
import { CSSTransition } from "react-transition-group";
import PropTypes from 'prop-types';
import "./index.css";

export default function Alert(props) {
  return (
    <CSSTransition
      in={props.show}
      timeout={300}
      unmountOnExit
      classNames="alert"
      onEnter={() => {props.beforeEnter && props.beforeEnter()}}
      onExited={() => {props.afterExit && props.afterExit()}}
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
  title: "",
  msg: ""
};
Alert.propTypes = {
  title: PropTypes.string.isRequired,
  msg: PropTypes.string.isRequired,
  onClose: PropTypes.func,
  beforeEnter: PropTypes.func,
  afterExit: PropTypes.func,
}