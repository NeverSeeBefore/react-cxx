import React, { Component } from "react";

export class Comp1 extends Component {
  render() {
    return (
      <div>
        组件Comp1
        <Child></Child>
      </div>
    );
  }
}

class Child extends Component {
  render() {
    const spans = this.props.list.map((item, index) => {
      return <span key={index}>{item}</span>
    });
    return (
      <div>
        组件Comp1
        {spans}
      </div>
    );
  }
}