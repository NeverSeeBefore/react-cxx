import React from "react";
import "./App.css";
import { BrowserRouter, Link, Route } from "react-router-dom";
import RootRouter from "./RootRouter";
import RouteGuard from "./RouteGuard";

class App extends React.Component {
  render() {
    return (

      <RouteGuard
        onBeforeChange={(prevLocation, curLocation, action, commit, unBlock) => {
          console.log(
            `日志：页面想从${prevLocation.pathname}进入页面${curLocation.pathname},进入方式${action}`
          );
          // 假如，阻止/page1向/page2跳转，可以这样
          if(prevLocation.pathname === '/page1' && curLocation.pathname === '/page2'){
            commit(false);
          }else{
            commit(true);
          }
          // 取消阻塞函数;下次执行就不会阻塞，然后就不会走到这里；
          // unBlock();
        }}
        onChange={(prevLocation, curLocation, action, unListen) => {
          console.log(
            `日志：从${prevLocation.pathname}即将进入页面${curLocation.pathname},进入方式${action}`
          );
          // unListen && unListen(); // 取消监听
        }}
      >
        <Link to="/page1">page1</Link>
        <Link to="/page2">page2</Link>
        <Route path="/page1" component={Page1}></Route>
        <Route path="/page2" component={Page2}></Route>
      </RouteGuard>
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
