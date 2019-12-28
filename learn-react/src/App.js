import React from "react";
import "./App.css";
import { Route, NavLink, BrowserRouter } from "react-router-dom";
import BeforeRouteLeave from "./BeforeRouteLeave";
import RootRouter from "./RootRouter";

class App extends React.Component {
  render() {
    return (
      <BrowserRouter getUserConfirmation={(message, cb) => {
        
      }}>
        <div className="nav">
          <NavLink to="/page1">page1</NavLink>
          <NavLink to="/page2">page2</NavLink>
        </div>
        <Route path="/page1" component={Page1}></Route>
        <Route path="/page2" component={Page2}></Route>
      </BrowserRouter>
    );
  }
}

export default App;

function Page1(Props) {
  return (
    <>
      <BeforeRouteLeave
        when={true}
        message={"确认离开本页面吗"}
      ></BeforeRouteLeave>
      <div>page1</div>
    </>
  );
}

function Page2(Props) {
  return <div>page2</div>;
}
