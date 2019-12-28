import React, { Component } from 'react';
import resetScroll from '../util/resetScroll';

export default function withScrollTop (Comp) {

  return class ScrollTopWrapper extends Component{
    componentDidMount(){
      resetScroll();
    }
    componentWillUnmount(){
      window.scrollTo(0 ,0);
      
    }
    render(){
      return <Comp {...this.props}></Comp>
    }
  }

}

