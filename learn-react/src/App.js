import React from "react";
import "./App.css";
import WidthLog from "./HOC/widthLog.js";

// 函数组件A
function CompA(props, ref) {
  console.log(ref);
  return (
    <div>
      <span ref={ref}>CompA</span>
      {props.words}
    </div>
  );
}

// 类组件B
class CompB extends React.Component {
  render() {
    return (
      <div>
        <span ref={this.props.ref1}>CompB</span>
        {this.props.words}
      </div>
    );
  }
}
// 设置AB的ref转发
const NewCompA = React.forwardRef(CompA);
const NewCompB = React.forwardRef((props, ref) => {
  return <CompB {...props} ref1={ref}></CompB>;
});
// 组件C
// function CompC(props, ref) {
//   return (
//     <div>
//       <span ref={ref}>CompC</span>
//       {props.words}
//     </div>
//   );
// }
// 函数组件C
class CompC extends React.Component {
  render(){
    return (
      <div>
        <span>CompC</span>
        {this.props.words}
      </div>
    );
  }
}
const LogCompC = new WidthLog(CompC);
// const LogLogCompC = new WidthLog(LogCompC);
class App extends React.Component {
  // state = {};
  componentDidMount() {
    // console.log(this.ARef);
    setTimeout(() => {
      console.log((this.ARef.current.innerHTML = "ref change"));
      console.log((this.BRef.current.innerHTML = "ref change"));
      console.log(this.CRef);
    }, 1000);
  }
  ARef = React.createRef();
  BRef = React.createRef();
  CRef = React.createRef();
  render() {
    return (
      <div className="App">
        {/* <CompA ref={this.ARef}></CompA> */}
        <NewCompA ref={this.ARef} words="AAAAA"></NewCompA>
        <NewCompB ref={this.BRef} words="BBBBB"></NewCompB>
        <LogCompC ref={this.CRef}></LogCompC>
        {/* <LogLogCompC></LogLogCompC> */}
      </div>
    );
  }
}

export default App;
