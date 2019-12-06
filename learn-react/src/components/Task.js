import React, { Component } from "react";
import PropTypes from 'prop-types';
import './task.css'
import { ObjectEqual } from "../util/helper";

function FuncComponent () {
  return (
    <li className={this.props.isFinish ? 'finish' : ''}>{this.props.name}</li>
  );
}
export default React.memo(FuncComponent);

export class Task extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    isFinish: PropTypes.bool.isRequired
  }
  shouldComponentUpdate(newProps, newState){
    const res = !(ObjectEqual(newProps, this.props) && ObjectEqual(newState, this.state));
    console.log('是否重新渲染', res)
    return res;
  }
  render() {
    console.log('Task render')
    return (
      <li className={this.props.isFinish ? 'finish' : ''}>{this.props.name}</li>
    );
  }
}

