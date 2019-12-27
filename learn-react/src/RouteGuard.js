import React, { Component } from "react";
import { BrowserRouter, withRouter } from "react-router-dom";
let prevLocation, location, action, unBlock;

// 用于获取BrowserRouter上下文；
class _GuardHelper extends Component {
  constructor(props, context) {
    super(props);
    console.log("_GuardHelper: ", props, context);
  }
  componentDidMount() {
    // 页面即将跳转时会被阻塞（block）
    // 添加阻塞，让getUserConfirmation执行
    // 返回值时取消阻塞的函数
    unBlock = this.props.history.block((newLocation, newAction) => {
      prevLocation = this.props.location;
      location = newLocation;
      action = newAction;
      return "";
    });
    // 添加监听，当页面即将进入的时候，会被监听
    // 即使没有设置阻塞，也会执行这个监听；
    // 返回值时取消监听的函数
    this.unListen = this.props.history.listen((location, action) => {
      // console.log('aaaaa', this.props.location);
      const prevLocation = this.props.location;
      this.props.onChange &&
        this.props.onChange(prevLocation, location, action, this.unListen);
    });
  }
  componentWillUnmount() {
    unBlock();
  }
  render() {
    return null;
  }
}
const GuardHelper = withRouter(_GuardHelper);

class RouteGuard extends Component {
  // componentDidMount() {
  //   // 添加监听器 beforeEnter();
  //   this.unListen = this.props.history.listen((location, action) => {
  //     const prevLocation = this.props.location;
  //     this.props.onChange &&
  //       this.props.onChange(prevLocation, location, action, this.unListen);
  //     console.log(location, action);
  //   });
  //   // 设置阻塞 （这里设置了阻塞，路由根组件设置的getUserConfirmation就会生效） beforeRouteLeave
  //   this.props.history.block("真的要跳转吗");
  // }

  componentWillUnmount() {
    this.unListen && this.unListen();
  }
  handleUserConfirmation = (msg, commit) => {
    // commit是一个函数
    // commit的参数决定是否跳转
    console.log("handleUserConfirmation");
    if (this.props.onBeforeChange) {
      this.props.onBeforeChange(
        prevLocation,
        location,
        action,
        commit,
        unBlock
      );
    } else {
      commit(true);
    }
  };
  render() {
    // console.log(this.props);
    return (
      <BrowserRouter getUserConfirmation={this.handleUserConfirmation}>
        <GuardHelper onChange={this.props.onChange}></GuardHelper>
        {this.props.children}
      </BrowserRouter>
    );
  }
}

export default RouteGuard;
