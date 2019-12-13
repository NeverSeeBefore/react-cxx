import React from "react";
import "./App.css";
import Test from "./components/Form/Test";

class App extends React.Component {
  state = {};
  componentDidMount() {}
  componentWillMount(){
    console.log('componentWillMount')
  }
  render() {
    return (
      <React.StrictMode>
        <div className="App">
          <Test></Test>
        </div>
      </React.StrictMode>
    );
  }
}

export default App;
