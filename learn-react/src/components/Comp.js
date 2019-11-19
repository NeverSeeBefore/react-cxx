import React, { Component } from 'react';

class Comp extends Component {
  state = {
    n: 0
  }
  render () {
    console.log("render ", this.state.n)
    return (
      <div>
        <h1>{this.state.n}
        </h1>
        <div onClick={this.handleAdd}>+</div>
      </div>
    )
  }
  handleAdd = () => {
    this.setState({
      n: this.state.n + 1
    }, () => {
      console.log("handleAdd -> setState", this.state.n)
    })
    console.log("handleAdd ", this.state.n)
    // render (new) ----- handleAdd n(old) ----- handleAdd -> setState n(new)

  }

}

export default Comp;