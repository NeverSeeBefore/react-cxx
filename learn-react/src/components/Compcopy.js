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
    this.setState(prev => {
      // prev 表示之前状态
      // 给函数的返回结果，会混合(覆盖)掉之前的状态
      // 这个函数不会立即执行，会在适当的时间执行
      console.log("handleAdd -> setState", prev.n)
      return {
        n : prev.n + 1
      }
      // 而且参数时可以信任的。
    })
    this.setState(prev => {
      console.log("handleAdd -> setState", prev.n)
      return {
        n : prev.n + 1
      }
    })
    this.setState(prev => {
      console.log("handleAdd -> setState", prev.n)
      return {
        n : prev.n + 1
      }
    })
    console.log("handleAdd ", this.state.n)
  }

}

export default Comp;