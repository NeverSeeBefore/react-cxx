import React from "react";
import "./App.css";
import Test from "./components/Form/Test";

class App extends React.Component {
  state = {};
  componentDidMount() {}

  render() {
    return (
      <div className="App">
        {/* <Test></Test> */}
        <button onClick={(e) => {
          console.log('按钮被点击')

          e.stopPropagation();  // 阻止react的事件冒泡

          console.log(e.nativeEvent); // 原生的事件参数

          console.log(e.nativeEvent.stopImmediatePropagation()); // 阻止剩余的事件处理程序运行；

          e.persist();  // 持久化事件对象，以允许异步操作
          setTimeout(() => {
            console.log(e.type)
          }, 0)

          
        }}>button</button>
      </div>
    );
  }
}
document.querySelector('#root').onclick=function (e) {
  // console.log(e);
  console.log('id为root的div被点击了');
  // e.stopPropagation();
}


export default App;
