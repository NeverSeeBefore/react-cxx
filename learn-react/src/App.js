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
  return (
    <div className="App">
      {/* <Test></Test> */}
      {/* <Counter></Counter> */}
      <CounterWithTimer></CounterWithTimer>
    </div>
  );
}
export default App;


function Counter() {
  // useTimer(() => {
  //   console.log("counting ---HOOK");
  // }, 1000);
  return null
}

// 再组件挂载后启动计时器
// 1. 自定义HOOK
function useTimer(func, duration) {
  const [timer, setTimer] = useState(null);
  useEffect(() => {
    setTimer(setInterval(func, duration));
    return () => {
      console.log("清理函数");
      clearInterval(timer);
    };
  }, []);
}
// 2. HOK
function withTimer(Comp){
  return class TimerWrapper extends Component{
    componentDidMount(){
      this.timer = setInterval(() => {
        console.log('counting ---HOC')
      }, 1000);
    }
    componentWillUnmount(){
      console.log('componentWillUnmount')
      clearInterval(this.timer);
    }

    render() {
      return <Comp {...this.props}></Comp>
    }
  }
}
// 3. render porps