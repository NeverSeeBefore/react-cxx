import React, { Component } from 'react';

class NewLifeCycle extends Component {
  constructor(props){
    super(props);
    this.state = {
      number: 100
    }
    console.log("组件诞生", arguments)
  }
  // componentWillMount(){
  //   console.log("componentWillMount", arguments)
  // }
  render () {
    console.log("render","返回的内容会被挂载到虚拟dom树上")
    return (
      <div>
        <div>NewLifeCycle</div>
        <div>props: {this.props.number} </div>
        <div>state: {this.state.number} </div>
        <button onClick={() => {
          this.setState({
            number: this.state.number + 1
          })
        }}>NewLifeCycle++</button>
      </div>
      )
  }
  componentDidMount(a,b,c){
    console.log("componentDidMount",a,b,c )
  }
  static getDerivedStateFromProps(props, state){
    console.log("getDerivedStateFromProps", props, state);
    // return {
    //   number: props.number * 100
    // }
    return null;
  }
  // componentWillReceiveProps(newProps){
  //   console.log("componentWillReceiveProps", "组件即将接受新的属性", newProps); 
  // }
  shouldComponentUpdate(nextPorps, nextState){
    console.log("shouldComponentUpdate", "组件是否应该重新渲染", nextPorps, nextState)
    return true; 
  }
  // componentWillUpdate(nextPorps, nextState){
  //   console.log("componentWillUpdate", "组件即将被重新渲染")
  // }
  getSnapshotBeforeUpdate(prevProp, prevState){
    console.log("getSnapshotBeforeUpdate", prevProp, prevState);
    return [prevProp, prevState]
  }
  componentDidUpdate(props, state, fromSnapShot){
    console.log("componentDidUpdate", "组件已经重新渲染",props, state, "fromSnapShot: ", fromSnapShot);
  }
  componentWillUnmount(){
    console.log("componentWillUnmount", "组件即将被销毁");
  }
}

export default NewLifeCycle;