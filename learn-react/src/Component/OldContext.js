import React, {Component} from 'react'
import PropTypes from 'prop-types';

class OldContext extends Component{
  static childContextTypes = {
    a: PropTypes.number,
    b: PropTypes.string.isRequired,
    handleChange: PropTypes.func
  }
  state = {
    a: 234,
    b: "mainString"
  }
  getChildContext(){
    console.log("OldContext")
    return {
      a: this.state.a,
      b: this.state.b,
      handleChange: (val) => {
        this.setState({
          a: val
        })
      }
    }
  }
  handleClick = () => {
    this.setState({
      a: this.state.a + 1
    })
  }
  render(){
     return(
       <div>
         <div>OldContext</div>
         <div><button onClick={this.handleClick}>a+1</button></div>
         <CompA></CompA>
       </div>
     )
  }
}

export default OldContext;

class CompA extends React.Component{
  constructor(props, context){
    super(props, context);
    console.log(this.context)
  }
  static contextTypes = {
    a: PropTypes.number,
    b: PropTypes.string,
  }

  // static childContextTypes = {
  //   a: PropTypes.number,
  //   c: PropTypes.string,
  // }
  // getChildContext(){
  //   console.log("CompA")
  //   return {
  //     a: 789,
  //     c: 'c in compA'
  //   }
  // }

  render(){
    return (
      <div>
        <div>CompA</div>
        <div>a: {this.context.a}</div>
        <div>b: {this.context.b}</div>
        <CompB></CompB>
      </div>
    )
  }
}

class CompB extends React.Component{
  constructor(props, context){
    super(props, context);
    console.log(this.context)
  }
  static contextTypes = {
    a: PropTypes.number,
    b: PropTypes.string,
    c: PropTypes.string,
    handleChange: PropTypes.func
  }

  render(){
    return (
      <div>
        <div>CompB</div>
        <div>a: {this.context.a}</div>
        <div>b: {this.context.b}</div>
        <div>c: {this.context.c}</div>
        <div><button onClick={() => {this.context.handleChange(this.context.a + 2)}}>a + 2</button></div>
      </div>
    )
  }
}