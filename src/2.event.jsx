
import React from "react";

export class ClassComp extends React.Component {
  state = {
    outerText: "outer",
    innerText: "inner",
  };
  onBoxClick = (key) => {
    this.setState({
      outerText: this.state[key] + " clicked",
    });
  };

  render() {
    return (
      <div className="comp-box">
        <h1>事件</h1>
        <div className="box-outer" onClick={this.onBoxClick("outerText")}>
          {this.state.outerText}
          <div className="box-inner" onClick={this.onBoxClick("innerText")}>
            {this.state.innerText}
          </div>
        </div>
      </div>
    );
  }
}
