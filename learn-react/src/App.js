import React from "react";
import "./App.css";
import {
  BrowserRouter,
  Route,
  Link,
  NavLink,
  Redirect,
  Switch
} from "react-router-dom";

class App extends React.Component {
  state = {};
  componentDidMount() {}
  testRef = React.createRef();
  render() {
    return (
      <BrowserRouter>
        <Link to="/user">用户</Link>
        <Link to="/other">其他</Link>
        <Route path="/user" component={User}></Route>
        <Route path="/other" component={Other}></Route>
        <Redirect to="/other"></Redirect>
      </BrowserRouter>
    );
  }
}

export default App;
function User(props) {
  console.log(props.match);
  return (
    <div>
      <div>User 固定区域</div>
      <div style={{width: 200, height: 200, backgroundColor: '#333', color: '#fff'}}>
        <div>User 变化区域</div>
        <Link to={`${props.match.url}/update`}>用户信息</Link>
        <Link to={`${props.match.url}/pay`}>充值</Link>
        <Route path={`${props.match.url}/update`} component={UserUpdate}></Route>
        <Route path={`${props.match.url}/pay`} component={UserPay}></Route>
        <Redirect to={`${props.match.url}/update`}></Redirect>
      </div>
    </div>
  );
}
function Other(props) {
  console.log(props.match);

  return (
    <div>
      <div>Other 固定</div>
      <div>
        <div>Other 变化</div>
        {/* <Route path="/user/update" component={UserUpdate}></Route>
        <Route path="/user/pay" component={UserPay}></Route> */}
      </div>
    </div>
  );
}
function UserUpdate() {
  return <div>修改用户信息</div>;
}
function UserPay() {
  return <div>充值页面</div>;
}
function UserAnother() {
  return <div>其他界面</div>;
}
function PageA() {
  return <div>A页面</div>;
}
function PageB() {
  return <div>B页面</div>;
}
function PageC() {
  return <div>C页面</div>;
}
function PageD() {
  return <div>D页面</div>;
}

function NavBar() {
  return (
    <div>
      <a href="/a">去A页</a>
      <a href="/b">去B页</a>
      <a href="/c">去C页</a>
      <a href="/d">去D页</a>
    </div>
  );
}
