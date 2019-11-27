import React, { Component } from 'react';

export default function withLogin(Comp) {
  return class LoginWrapper extends Component {
    render () {
      if(this.props.isLogin){
        return (
          <Comp {...this.props} />
        )
      }else{
        return null
      }
    }
  
  }
}