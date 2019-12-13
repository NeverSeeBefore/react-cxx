import React from "react";
import "./App.css";

class App extends React.Component {
  state = { a: 0 };
  componentDidMount() {}
  render() {
    return (
      <div className="App">
        App
        <A n={this.state.a}></A>
      </div>
    );
  }
}

export default App;

class A extends React.Component {
  constructor(props){
    super(props);
  }
  state = {
    n: 'A-n'
  }
  render() {
    return (
      <div>
        A: prop[{this.props.n}]
        <B n={this.state.n}></B>

      </div>
    );
  }
}
class B extends React.Component {
  render() {
    return (
      <div>
        <h1>B {this.props.n}</h1>
        <C></C>
      </div>
    );
  }
}
function C(props) {
  return <div>C</div>;
}
