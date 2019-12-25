import React from "react";
import "./App.css";
import { HashRouter, Route, Switch } from "react-router-dom";

class App extends React.Component {
  state = {};
  componentDidMount() {}

  render() {
    return (
      <HashRouter>
        <div className="App">
          <div>App</div>
          <Route component={Any}></Route>
          <Route path="/a" exact component={A}></Route>
          <Route path="/b" component={B}></Route>
          <Route path="/c" component={C}></Route>
          <Route path="/a/b" component={AB}></Route>
          <Route path="/a/c" component={AC}></Route>
          <Route path="/content">
            {() => <div style={{ color: "orange" }}>abcdef</div>}
          </Route>
          <div>↓Switch↓</div>
          <Switch>
            <Route path="/a" component={A}></Route>
            <Route path="/b" component={B}></Route>
            <Route path="/a/b" component={AB}></Route>
            <Route component={ErrorComp}></Route>
          </Switch>
        </div>
      </HashRouter>
    );
  }
}

export default App;

function Any() {
  return <div>任意路径</div>;
}
function ErrorComp() {
  return <div>404</div>;
}
function A() {
  return <div> 组件A </div>;
}
function B() {
  return <div> 组件B </div>;
}
function C() {
  return <div> 组件C </div>;
}
function AB() {
  return <div> 组件/A/B </div>;
}
function AC() {
  return <div> 组件/A/C </div>;
}
