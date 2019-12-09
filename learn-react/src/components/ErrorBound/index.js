import React, { Component } from "react";

class ErrorBound extends Component {
  state = {
    hasError: false
  };

  static getDerivedStateFromError(err) {
    console.log("发生错误", err);
    // return false
    return {
      hasError: true
    };
  }
  
  componentDidCatch(err){
    console.log()
  }

  render() {
    if(this.state.hasError){
      return <div className='err'>err</div>
    }
    return this.props.children;
  }
}

export default ErrorBound;
