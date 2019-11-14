import React, { Component } from 'react';
import Tick from '../Tick'

class Content extends Component {

  state = {
    isOver: false
  }
  render () {
    return (
      <div>
        <Tick number={5} onOver={this.handleOver}></Tick>
        {
          this.state.isOver ? "over" : "no-over"
        }
      </div>
    )
  }
  handleOver = () => {
    this.setState({
      isOver: true
    })
  }

}

export default Content;