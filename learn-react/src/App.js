import React from "react";
import "./App.css";
import { Route, HashRouter, BrowserRouter, Switch, withRouter } from "react-router-dom";
// import Test from "./components/Layout/Test";
import queryStrig from "query-string";

// http://localhost:3000/a?a=wewe&dsad=dedaw#ewedew
class App extends React.Component {
  state = {};
  componentDidMount() {}

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Switch>
            <Route
              path="/news/:year/:month/:day"
              exact
              component={News}
            ></Route>
            <Route path="/a" exact component={A}></Route>
            <Route path="/" component={B}></Route>
            <Route component={NotFound}></Route>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;

function NotFound() {
  return <h1>404</h1>;
}
function A(props) {
  console.log(props);
  console.log(queryStrig.parse(props.location.search));
  return (
    <div>
      <h1>AAAAA</h1>
      <div>访问地址{props.location.pathname}</div>
      <div>hash: {props.location.hash}</div>
      <div>search: {props.location.search}</div>
      <div>状态数据：{props.history.location.state}</div>
      <button
        onClick={() => {
          props.history.push("/b", "状态数据");
        }}
      >
        跳转/b
      </button>
    </div>
  );
}

function B(props) {
  console.log(props);
  return (
    <div>
      <h1>BBBBB</h1>
      <div>状态数据：{props.history.location.state}</div>
      <button
        onClick={() => {
          props.history.push("/a", "状态数据");
        }}
      >
        跳转/a
      </button>
    </div>
  );
}

function News(props) {
  console.log(props);
  return (
    <div>
      显示{props.match.params.year}年{props.match.params.month}月
      {props.match.params.day}日的新闻
      <Back {...props}></Back>
      <BackWithRouter></BackWithRouter>
    </div>
  );
}
const BackWithRouter = withRouter(Back);
function Back (props) {
  // console.log('back', props);
  return <button onClick={() => {props.history.push("/")}}>返回首页</button>
}