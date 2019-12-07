import React, { PureComponent } from 'react';
import './style.css';
/**
 * 监听送鼠标变化
 */
class MouseListener extends PureComponent {

 
  state = {
    left: 0,
    top: 0
  }
  handleMove = (e) => {
    // console.log(e.target,e.target.offsetX);
    // console.log(e.pageX, e.pageY);
    // console.log(this.point.current.getBoundingClientRect());
    const {left, top} = this.point.current.getBoundingClientRect();
    console.log(left, top);
    this.setState({
      left: e.clientX - left,
      top: e.clientY - top
    })
  }
  point = React.createRef();
  render () {
    return (
      <div ref={this.point} className="point" onMouseMove={this.handleMove}>
        {this.props.render ? this.props.render(this.state) : 'MouseListener'}
      </div>
    )
  }
}

export default MouseListener;