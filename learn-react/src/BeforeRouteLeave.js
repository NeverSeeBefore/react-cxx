import React, { Component } from "react";
import { withRouter } from "react-router-dom";

class BeforeRouteLeave extends Component {
  static defaultProps = {
    when: false, // true时添加阻塞
    message: "" // 阻塞消息
  }
  componentDidMount(){
    this.handleBlock();
  }
  componentDidUpdate() {
    this.handleBlock();
  }
  handleBlock = () => {
    if(this.props.when){
      this.unBlock = this.props.history.block(this.props.message);
    }
  }
  componentWillUnmount() {
    if (this.unBlock) {
      this.unBlock();
    }
  }
  render() {
    return null;
  }
}

export default withRouter(BeforeRouteLeave);
