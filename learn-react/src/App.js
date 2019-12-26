import React from "react";
import "./App.css";
import { Route, HashRouter, BrowserRouter, Switch, withRouter } from "react-router-dom";
import Test from "./components/Layout/Test";
import queryStrig from "query-string";

// http://localhost:3000/a?a=wewe&dsad=dedaw#ewedew
class App extends React.Component {
  state = {};
  componentDidMount() {}

  render() {
    return (
      <Test></Test>
    );
  }
}

export default App;

