import "./App.css";
import Home from "./Home";
import { ClassComp } from "./1.component";
import ReduxToDo from "./reduxTodo";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Home from="app" date={new Date().toDateString()}></Home>
        <ClassComp></ClassComp>
        {/* 第一种使用redux的方式，通过react-redux的connect关联组件和仓库 */}
        {/* <ReduxToDo mode="A"></ReduxToDo> */}
        {/* <ReduxToDo mode="B"></ReduxToDo> */}
        <ReduxToDo mode="C"></ReduxToDo>
      </header>
    </div>
  );
}

export default App;
