import React, { useState, useEffect, Component } from "react";
import "./App.css";
import { useAllStudents } from "./components/myHook/useAllStudent";

function Test() {
  // 自定义钩子
  const stus = useAllStudents(1);
  console.log(stus);
  return null;
}
const CounterWithTimer = withTimer(Counter);
function App() {
  const [visiable, setVisiable] = useState(true);
  return (
    <div className="App">
      {/* <Test></Test> */}
      {visiable && <Counter></Counter>}
      {/* {visiable && <CounterWithTimer></CounterWithTimer>} */}
      {/* {visiable && <Timer render={(number) => <Counter number={number}></Counter>}></Timer>} */}
      <button
        onClick={() => {
          setVisiable(!visiable);
        }}
      >
        show/hidden
      </button>
    </div>
  );
}
export default App;

// 使用自定义HOOK的时候
function Counter(props) {
  const number = useTimer(() => {
    console.log("counting ---Counter");
  }, 1000);
  return <div>{number}</div>;
}

// 使用HOC和RenderProps时调用
// function Counter(props) {
//   return <div>{props.number}</div>;
// }

// 再组件挂载后启动计时器
// 1. 自定义HOOK  
function useTimer(func, duration) {
  const [number, setNumber] = useState(0);
  useEffect(() => {
    const timer = setTimeout(() => {
      console.log("counting ---HOOK");
      setNumber(number + 1);
    }, duration);
    func();
    return () => {
      clearInterval(timer);
    };
  }, [number]);
  return number;
}
// 2. HOK
function withTimer(Comp) {
  return class TimerWrapper extends Component {
    state = {
      number: 0
    };
    componentDidMount() {
      this.timer = setInterval(() => {
        console.log("counting ---HOC");
        this.setState({ number: this.state.number + 1 });
      }, 1000);
    }
    componentWillUnmount() {
      console.log("componentWillUnmount");
      clearInterval(this.timer);
    }

    render() {
      return <Comp {...this.props} number={this.state.number}></Comp>;
    }
  };
}
// 3. render porps
class Timer extends Component {
  state = {
    number: 0
  };
  componentDidMount() {
    this.timer = setInterval(() => {
      console.log("counting ---RenderProps");
      this.setState({ number: this.state.number + 1 });
    }, 1000);
  }
  componentWillUnmount() {
    console.log("componentWillUnmount");
    clearInterval(this.timer);
  }
  render() {
    if (typeof this.props.render === "function") {
      return this.props.render(this.state.number);
    } else {
      return null;
    }
  }
}
