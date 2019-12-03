import React, { Component } from 'react';


class CompRefFunc extends Component {

  
  handleClick = () => {
    // var dom = document.querySelector('input');
    // dom.focus();
    this.txt.focus()
  }
  handleRef = el => {
    this.txt = el;
  }
  
  render () {
    return (
      <div>
      {/* 通过函数设置ref */}
        <input ref={el => {this.txt = el; console.log('函数被调用')}} type="text"></input>
        {/* <input ref={ this.handleRef } type="text"></input> */}

        <button onClick={this.handleClick}>聚焦</button>
        
      </div>
    )
  }

}


export default CompRefFunc;