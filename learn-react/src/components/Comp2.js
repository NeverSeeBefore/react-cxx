import React, { Component } from "react";

export class Comp2 extends Component {
  render() {
    const spans = this.props.list.map((item, index) => {
      return <span key={index}>{item}</span>
    });
    return (
    <div>
        组件Comp2
        {spans}
      </div>
    );
  }
}

