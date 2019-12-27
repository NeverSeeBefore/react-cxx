import React from "react";
import "./App.css";
import { BrowserRouter, Link } from "react-router-dom";
import RootRouter from "./RootRouter";

class App extends React.Component {
  render() {
    return <BrowserRouter>
      <Link to="/">首页</Link>
      <Link to="/news">新闻页</Link>
      <div>
        <RootRouter></RootRouter>
      </div>
    </BrowserRouter>;
  }
}

export default App;
