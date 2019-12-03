import React from "react";
import "./App.css";
import Comp from "./components/Comp";
import CompRefFunc from "./components/CompRefFunc";

class App extends React.Component {
  state = {
    
  };
  componentDidMount() {
    
  }

  render() {
    return (
      <div className="App">
        <Comp></Comp>
        <CompRefFunc></CompRefFunc>
      </div>
    );
  }
}

export default App;
