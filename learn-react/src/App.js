import React from "react";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import NavBar from "./pages/pages";
import News from "./pages/News";
import Home from "./pages/Home";
import Personal from "./pages/Personal";
import TransitionRoute from "./TransitionRoute";

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <NavBar></NavBar>
        <div className="main">
          <TransitionRoute
            path="/news"
            component={News}
          ></TransitionRoute>
          <TransitionRoute
            path="/personal"
            component={Personal}
          ></TransitionRoute>
          <TransitionRoute path="/" exact component={Home}></TransitionRoute>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;

function Page1() {
  return <div>Page1</div>;
}
function Page2() {
  return <div>Page2</div>;
}
