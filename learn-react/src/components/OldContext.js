import React, { Component } from "react";
import PropTypes from "prop-types";

class OldContext extends Component {
  static childContextTypes = {
    a: PropTypes.number,
    b: PropTypes.string.isRequired
  };
  /**
   * 得到上下文中的数据
   */
  getChildContext() {
    console.log("getChildContext");
    return {
      a: 123,
      b: "string"
    };
  }
  render() {
    return (
      <div>
        <ChildA></ChildA>
      </div>
    );
  }
}

export default OldContext;

function ChildA(props) {
  return (
    <>
      <div>ChildA</div>
      <ChildB></ChildB>
    </>
  );
}
class ChildB extends React.Component {
  // static childContextTypes = {
  //   a: PropTypes.number,
  //   b: PropTypes.string.isRequired
  // };
  constructor(props, context){
    super(props, context);
    console.log(this.context);
    // this.context = context;
  }
  static contextTypes = {
    a: PropTypes.number,
    b: PropTypes.string.isRequired,
  }
  render() {
    const {a, b} = this.context;
    return <div>ChildB<div>{a}{b}</div></div>;
  }
}
