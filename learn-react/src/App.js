import React from "react";
import "./App.css";
import OldContext from "./components/OldContext";
import NewContext from "./components/NewContext";

class App extends React.Component {
  state = {
    
  };
  componentDidMount() {
    
  }

  render() {
    return (
      <div className="App">
        {/* <OldContext></OldContext> */}
        <NewContext></NewContext>
      </div>
    );
  }
}

export default App;
