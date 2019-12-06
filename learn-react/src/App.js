import React from "react";
import "./App.css";
import TaskContainer from "./components/TaskContainer";


class App extends React.Component {
  state = {};
  componentDidMount() {}

  render() {
    return (
      <div className="App">
        <TaskContainer></TaskContainer>
      </div>
    );
  }
}

export default App;
