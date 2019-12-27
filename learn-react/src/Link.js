import React from "react";
import { withRouter } from "react-router-dom";

function LinkK (props) {
  return <a href={props.to} onClick={(e) => {
    // console.log(props);
    e.preventDefault();
    props.history.push(props.to)
  }}>{props.children}</a>;
}

export default withRouter(LinkK);