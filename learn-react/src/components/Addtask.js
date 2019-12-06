import React, { Component } from "react";

class AddTask extends React.PureComponent {
  state = {
    name: ""
  };
  // shouldComponentUpdate(){}

  render() {
    console.log('AddTask render');
    return (
      <div>
        <input
          value={this.state.name}
          onChange={e => {
            this.setState({
              name: e.target.value
            });
          }}
        ></input>
        <button
          onClick={() => {
            if(this.state.name == ''){
              return ;
            }
            this.props.onAdd &&
              this.props.onAdd({
                name: this.state.name,
                isFinish: false
              });
            // this.setState({
            //   name: ""
            // });
          }}
        >Add</button>
      </div>
    );
  }
}

export default AddTask;
