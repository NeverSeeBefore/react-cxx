import React from "react";
import "./App.css";
import Test from "./components/Layout/Test";

class App extends React.Component {
  state = {};
  componentDidMount() {}

  render() {
    return (
        <div className="App">
          <Test></Test>
        </div>
    );
  }
}

export default App;
