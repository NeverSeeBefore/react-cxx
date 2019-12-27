import React from "react";
import "./App.css";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import Login from "./Login";
import Home from "./Home";
import Personal from "./Personal";
import ProtectedRoute from "./ProtectedRoute";

class App extends React.Component {
  state = {};
  componentDidMount() {}
  testRef = React.createRef();
  render() {
    return (
      <BrowserRouter>
        <div>
          <Link to="/">首页</Link>
        </div>
        <div>
          <Link to="/login">登录页</Link>
        </div>
        <div>
          <Link to="/personal">个人中心</Link>
        </div>
        <Switch>
          <Route path="/login" component={Login}></Route>
          <ProtectedRoute path="/personal" component={Personal}></ProtectedRoute>
          <Route path="/" component={Home}></Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
