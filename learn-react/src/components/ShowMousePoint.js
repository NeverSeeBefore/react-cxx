import React, { Component } from 'react';

class ShowMousePoint extends React.PureComponent {
  state = {
    top: 0,
    left: 0
  }
  handleMove = e => {
    const {left, top} = this.point.current.getBoundingClientRect();
    this.setState({
      left: e.clientX - left,
      top: e.clientY - top
    })
  }
  point = React.createRef();
  render () {
    return (
      <div ref={this.point} className="point" onMouseMove={this.handleMove}>
        top: {this.state.top}
        left: {this.state.left}
      </div>
    )
  }

}

export default ShowMousePoint