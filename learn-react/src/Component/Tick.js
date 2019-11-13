import React, { Component } from "react";

// 组件状态仅在类组件中有效
// 组件状态初始化有两种方式
// constructor
class Tick extends Component {
  // constructor(props) {
  //   // console.log(props);
  //   // super()
  //   super(props);
  //   this.state = {
  //     number: this.props.number
  //   };
  //   this.timer = setInterval(() => {
  //     this.setState({ number: this.state.number - 1 });
  //     if (this.state.number == 0) {
  //       clearInterval(this.timer);
  //     }
  //   }, 1000);
  //   // this.start = () => {
  //   //     const timer = setInterval(() => {
  //   //       this.setState({ number: this.state.number - 1 });
  //   //       if (this.state.number == 0) {
  //   //         clearInterval(timer);
  //   //       }
  //   //     }, 1000);
  //   //   };
  // }
  state = {
    number: this.props.number
  };
  render() {
    return <div>倒计时剩余时间： {this.state.number}<button onClick={this.start}>start</button></div>;
  }
  start = () => {
    const timer = setInterval(() => {
      this.setState({ number: this.state.number - 1 });
      if (this.state.number == 0) {
        clearInterval(timer);
      }
    }, 1000);
  };
}

export default Tick;
