import React, { Component } from "react";

export class A extends Component {
  render() {
    return (
      <div>
        组件AAAAA<p>{this.props.a}</p>
      </div>
    );
  }
}

export class B extends Component {
  render() {
    return (
      <div>
        组件BBBBB<p>{this.props.b}</p>
      </div>
    );
  }
}
