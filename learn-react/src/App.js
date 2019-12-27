import React from "react";
import "./App.css";
import { BrowserRouter, Route, Link, NavLink, Redirect, Switch } from "react-router-dom";
import LinkK from "./Link";

class App extends React.Component {
  state = {};
  componentDidMount() {}
  testRef = React.createRef();
  render() {
    return (
      <BrowserRouter>
        <div>
          a<NavBar></NavBar>
        </div>
        <div>
          自己实现link功能（无刷新跳转）
          <LinkK to="/a">去A页</LinkK>
          <LinkK to="/b">去B页</LinkK>
        </div>
        <div>
          Route组件 Link
          <Link to="/a">去A页</Link>
          <Link to="/b">去B页</Link>
        </div>
        <div>
          Route组件 Link : 对象的形式
          <Link
            to={{
              pathname: "/a",
              hash: "#abcde",
              search: "a=1&b=2"
            }}
          >
            去A页
          </Link>
          <Link to="/b">去B页</Link>
        </div>
        <div>
          Route组件 Link : replace 属性(默认false， 采取push跳转)
          <Link to="/b" replace>
            去B页
          </Link>
        </div>
        <div>
          Route组件 Link : innerRef 属性(可以将内部的a附加ref)
          <Link
            to="/a"
            innerRef={this.testRef}
            onClick={() => {
              console.log(this.testRef, this.testRef.current);
            }}
          >
            去A页
          </Link>
          <Link to="/b" innerRef={node => console.log(node)}>
            去B页
          </Link>
          <div>
            Route组件 NavLink : Link组件具备的功能，NavLink都有。额外功能是：根据当前地址和链接地址决定当前该元素的样式
            <NavLink to="/a">
              去A页
            </NavLink>
            <NavLink to="/b">
              去B页
            </NavLink>
          </div>
          <div>
            Route组件 NavLink : activeClassName属性：设置匹配时的类名;activeStyle属性：设置匹配时的内联样式 exact：是否精确匹配; sensitive:区分大小写；strict是否严格匹配最后的一个 /，
            <NavLink to="/a" activeClassName="selected">
              去A页
            </NavLink>
            <NavLink to="/b" activeClassName="selected" >
              去B页
            </NavLink>
          </div>
          <div>
            Route组件 Redirect : 当加载到该组件时，会无刷新跳转到另一个地址
            {/* <Switch>
              <Route path="/a" component={PageA}></Route>
              <Route path="/b" component={PageB}></Route>
              <Redirect to="/a"></Redirect>
            </Switch> */}
            {/* <Switch>
              <Route path="/a" component={PageA}></Route>
              <Route path="/b" component={PageB}></Route>
              <Redirect from="/abc" to="/a"></Redirect>
            </Switch> */}
          </div>
        </div>
        <Route path="/a" component={PageA}></Route>
        <Route path="/b" component={PageB}></Route>
      </BrowserRouter>
    );
  }
}

export default App;

function PageA() {
  return <div>A页面</div>;
}
function PageB() {
  return <div>B页面</div>;
}

function NavBar() {
  return (
    <div>
      <a href="/a">去A页</a>
      <a href="/b">去B页</a>
    </div>
  );
}
