import React, { Component } from 'react';
import {getRandom} from '../../util';
import Ball from '../ball/Ball';

class BallList extends Component {
  constructor(props){
    super();
    this.state = {
      BallInfos:[{}]
    }

    this.timer = setInterval(() => {
      if(this.state.BallInfos.length >=  5){
        clearInterval(this.timer);
      }
      var info = {
        left: getRandom(0, document.documentElement.clientWidth - 100),
        top: getRandom(0, document.documentElement.clientWidth - 100),
        speedx: getRandom(50, 500),
        speedy: getRandom(50, 500),
        bg: `rgba(${getRandom(0, 255)}, ${getRandom(0, 255)}, ${getRandom(0, 255)})`
      }
      this.setState({
        BallInfos: [...this.state.BallInfos, info]
      })
    }, 1000)
    
    

  }
  render () {
    return (
      <>
      {
        this.state.BallInfos.map((item, index) => {
          return <Ball key={index} {...item}></Ball>
        })
      }
      </>
    )
  }

}

export default BallList;  