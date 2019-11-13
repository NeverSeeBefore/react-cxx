import React, { Component } from 'react';

class A extends Component {
  state = {
    n: 123
  }
  constructor(props){
    super();
    // this.timer = setInterval(() =>{
    //   this.setState({
    //     n: this.state.n - 1
    //   })
    // }, 500)
  }
  render () {
    // console.log("A-Render")
    return (
    <div>
      <div>A组件{this.state.n}</div>
      <B n={this.state.n}></B>
    </div>
    )
  }

}
function B(props) {
  // console.log("BBBBBB-Render")
  return(
  <div>
    <div>B组件</div>
    <div>{props.n}</div>
    <C n={props.n}></C>
  </div>
  )
}
function C(props) {
  // console.log("CCCCC-Render")
  return(
  <div>C组件{props.n}</div>
  )
}

export default A;