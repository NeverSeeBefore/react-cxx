import React, { Component } from 'react';

class Comp extends Component {
  state = {
    n: 0
  }
  render () {
    console.log("render ", this.state.n)
    return (
      <div>
        
      </div>
    )
  }

}

export default Comp;