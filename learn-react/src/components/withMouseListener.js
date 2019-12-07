import React from 'react';

export default function WithMouseListener (Comp) {

  return class MouseListener extends React.PureComponent {

 
    state = {
      left: 0,
      top: 0
    }
    handleMove = (e) => {
      // console.log(e.target,e.target.offsetX);
      // console.log(e.pageX, e.pageY);
      // console.log(this.point.current.getBoundingClientRect());
      const {left, top} = this.point.current.getBoundingClientRect();
      // console.log(left, top);
      this.setState({
        left: e.clientX - left,
        top: e.clientY - top
      })
    }
    point = React.createRef();
    render () {
      return (
        <div ref={this.point} className="point" onMouseMove={this.handleMove}>
          <Comp {...this.props} top={this.state.top} left={this.state.left}></Comp>
        </div>
      )
    }
  }

}

