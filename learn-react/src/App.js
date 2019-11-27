import React from "react";
import "./App.css";
import {A, B} from './components/Comp.js';
import withLog from './HOC/withLog.js';
import withLogin from './HOC/widthLogin.js';

const ALog = withLog(A);
const BLog = withLog(B);
const ALogin = withLogin(A);
let ALogLogin = withLog(A);
ALogLogin = withLogin(ALogLogin);
const BLogLogin = withLogin(withLog(B));
class App extends React.Component {
  state = {
    
  };
  componentDidMount() {
    
  }

  render() {
    return (
      <div className="App">
        <ALog a='11111'/>
        <BLog b='22222'/>
        <ALogin a='nologin' />
        <ALogin a='loginnnn' isLogin />
        <ALogLogin isLogin a='log + login'></ALogLogin>
        <BLogLogin isLogin b='login(log(B))' />
      </div>
    );
  }
}

export default App;
