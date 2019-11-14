import React, { Component } from "react";

class Tick extends Component {
  constructor(props) {
    super();
    this.state = {
      number: props.number || 60,
      handleOver: props.onOver || function() {}
    };
    this.timer = setInterval(() => {
      this.setState({
        number: this.state.number - 1
      });
      if (this.state.number === 0) {
        clearInterval(this.timer);
        this.state.handleOver();
      }
    }, 1000);
  }
  render() {
    return <div>{this.state.number}</div>;
  }
}

export default Tick;
