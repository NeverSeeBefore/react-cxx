import React, { Component } from 'react';


class Comp extends Component {

  constructor(props){
    super(props);
    // React.createRef()  没有参数；  
    this.txt = React.createRef();
    console.log(this.txt);
  }

  handleClick = () => {
    // var dom = document.querySelector('input');
    // dom.focus();
    this.refs.txt.focus()
  }
  runAFunc = () => {
    this.refs.A.print()
  }
  refClick = () => {
    this.txt.current.focus();
    console.log(this.txt.current);
  }
  render () {
    return (
      <div>
        <input ref="txt" type="text"></input>
        <button onClick={this.handleClick}>聚焦</button>
        <div>
          <A ref="A"></A>
          <button onClick={this.runAFunc}>调用A的方法</button>
        </div>
        <div>
          <B></B>
          <button onClick={this.runAFunc}>Function components cannot be given refs，因为<b>没有意义</b></button>
        </div>
        <div>
          <input ref={this.txt} type="text"></input>
          <button onClick={this.refClick}>React.createRef聚焦</button>
        </div>
        
      </div>
    )
  }

}

class A extends Component {
  print () {
    console.log("A: print")
  }
  render () {
    return (
      <div>
        <b> 组件A </b>
      </div>
    )
  }
}

function B() {
  return <div>组件B</div>
}

export default Comp;