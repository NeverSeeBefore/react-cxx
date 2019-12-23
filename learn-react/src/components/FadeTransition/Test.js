import React from "react";
import FadeTransition from ".";
import { SwitchTransition } from "react-transition-group";

class Test extends React.Component {
  state = {
    show: true
  };
  render() {
    return (
      <div>
        <FadeTransition timeout={500} in={this.state.show}>
          <div>fade</div>
        </FadeTransition>
        <hr></hr>
        <SwitchTransition>
          <FadeTransition timeout={500} key={this.state.show}>
            <div>{this.state.show ? "fade show" : "fade hide"}</div>
          </FadeTransition>
        </SwitchTransition>
        <hr></hr>

        <button
          onClick={() => {
            this.setState({
              show: !this.state.show
            });
          }}
        >
          show
        </button>
      </div>
    );
  }
}

export default Test;
