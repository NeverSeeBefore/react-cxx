import React, { Component } from "react";
import "./style.css";

class Ball extends Component {
  constructor(props) {
    super();
    // 初始化
    this.state = {
      left: props.left || 0,
      top: props.top || 0,
      bg: props.bg || "orange",
      speedx: props.speedx || 100,
      speedy: props.speedy || 100
    };
    console.log(this.state);
    // 设置位移距离
    const duration = 16;
    // 定时移动
    setInterval(() => {
      const xDis = Math.ceil((this.state.speedx / 1000) * duration);
      const yDis = Math.ceil((this.state.speedy / 1000) * duration);
      // 新的位置
      let newLeft = this.state.left + xDis;
      let newTop = this.state.top + yDis;
      // 水平是否到达边界
      if (newLeft < 0) {
        newLeft = 0;
        this.setState({
          speedx: -this.state.speedx
        });
        // console.log(newLeft);
      } else if (newLeft >= document.documentElement.clientWidth - 100) {
        newLeft = document.documentElement.clientWidth - 100;
        this.setState({
          speedx: -this.state.speedx
        });
      }
      // 垂直是否到达边界
      if (newTop < 0) {
        newTop = 0;
        this.setState({
          speedy: -this.state.speedy
        });
      } else if (newTop >= document.documentElement.clientHeight - 100) {
        newTop = document.documentElement.clientHeight - 100;
        this.setState({
          speedy: -this.state.speedy
        });
      }
      // console.log(newLeft, newTop);
      // 确定新的位置
      this.setState({
        left: newLeft,
        top: newTop
      });
    }, duration);
  }
  render() {
    return (
      <div
        className="ball"
        style={{
          left: this.state.left,
          top: this.state.top,
          background: this.state.bg
        }}
      ></div>
    );
  }
}

export default Ball;
