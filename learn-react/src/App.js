import React, { Component } from 'react';
import A from './components';
import OldLifeCycle from './components/OldLifeCycle'
import NewLifeCycle from './components/NewLifeCycle';

class App extends Component {
  state = {
    number : 1
  }
  render () {
    return (
      <div className="App">
        Learn React
        {/* <OldLifeCycle number={this.state.number}></OldLifeCycle> */}
        <NewLifeCycle number={this.state.number}></NewLifeCycle>

        <button onClick={() => {
          // this.setState(state => {
          //   return {
          //     number : state.number + 1
          //   }
          // })
          this.setState({
            number: this.state.number + 1
          })
        }}>++</button>
      </div>
    );
  }

}

export default App;
