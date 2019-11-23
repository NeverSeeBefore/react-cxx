import React from "react";
import "./App.css";
import Modal from "./components/Modal";
import Comp from "./components/Comp";
import ThreeLayOut from "./components/ThreeLayout";

class App extends React.Component {
  state = {
    showModal: false
  };

  render() {
    return (
      <div className="App">
        <ThreeLayOut
          leftGap="10"
          rightGap="20"
          left={<div>左边栏</div>}
          right={<div>右边栏</div>}
        >
          <h1>主区域</h1>
          {this.state.showModal ? (
            <Modal
              children={<Comp click={this.change}></Comp>}
              show={this.state.showModal}
              clickShadow={this.change}
            ></Modal>
          ) : null}

          <button onClick={this.change}>SHOW</button>
        </ThreeLayOut>
      </div>
    );
  }

  change = params => {
    console.log("App.change", params);
    this.setState({
      showModal: !this.state.showModal
    });
  };
}

export default App;
