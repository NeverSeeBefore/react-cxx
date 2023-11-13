import React from "react";

export class ClassComp extends React.Component {
  state = {
    outerText: "outer",
    innerText: "inner",
    stopInnerBubble: false,
  };
  onOuterBoxClick = (key) => {
    this.setState({
      outerText: this.state.outerText + " clicked",
    });
  };
  onInnerBoxClick = (e) => {
    if (this.state.stopInnerBubble) {
      e.stopPropagation();
    }
    this.setState({
      innerText: this.state.innerText + " clicked",
    });
  };
  onButtonClick = () => {
    this.setState({
      stopInnerBubble: !this.state.stopInnerBubble,
    });
  };

  render() {
    return (
      <div className="comp-box">
        <h1>这是一个类组件</h1>
        <div>
          stopInnerBubble: {this.state.stopInnerBubble ? "true" : "false"}
          <button onClick={this.onButtonClick}>切换</button>
        </div>
        <div className="box-outer" onClick={this.onOuterBoxClick}>
          {this.state.outerText}
          <div className="box-inner" onClick={this.onInnerBoxClick}>
            {this.state.innerText}
          </div>
        </div>
        <div>在react中的事件是合成事件，获取原生事件通过`e.nativeEvent`获取</div>
        <div>阻止事件的冒泡，需要使用`e.stopPropagation()`</div>
        <div>阻止默认事件，不能使用`return false`的形式，需要使用`e.preventDefault()`,</div>
      </div>
    );
  }
}
