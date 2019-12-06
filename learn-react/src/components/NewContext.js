import React, { Component } from "react";
// const ctx = React.createContext({
//   a: 123,
//   b: 'string'
// });
const ctx = React.createContext();

class NewContext extends Component {
  state = {
    ctx: {
      a: 123,
      b: 'string',
      changeA: (val) => {
        // console.log(this.state)
        const ctx = this.state.ctx;
        ctx.a = val;
        this.setState({
          ctx
        });
      }
    },
    a: 123,
    b: "string"
  };
  render() {
    const Provider = ctx.Provider;
    return (
      <Provider value={this.state.ctx}>
        {/* <ctx.Provider> */}
        <div>
          <div>NewContext</div>
          <button onClick={this.handleClick}>a+1</button>
          <ChildA></ChildA>
        </div>
        {/* </ctx.Provider> */}
      </Provider>
    );
  }
  handleClick = (val) => {
    // console.log('vla', val.detail)
    const ctx = this.state.ctx;
    ctx.a = ctx.a + 1;
    this.setState({
      ctx
    });
  }
}

export default NewContext;

class ChildA extends Component {
  static contextType = ctx;
  render() {
    console.log(this.context);
    return (
      <div>
        <div>ChildA</div>
        <div>
          上下文属性： a: {this.context.a};b:{this.context.b}
        </div>
        <div>
          <button
            onClick={() => {
              this.context.changeA(this.context.a + 1);
            }}
          >
            a+1
          </button>
        </div>
        <ChildB></ChildB>
        <ChildFunc></ChildFunc>
      </div>
    );
  }
}
class ChildB extends Component {
  static contextType = ctx;
  render() {
    return (
      <div>
        <div>ChildB</div>
        <div>
          上下文属性： a: {this.context.a};b:{this.context.b}
        </div>
        <div>
          <button
            onClick={() => {
              this.context.changeA(this.context.a + 1);
            }}
          >
            a+1
          </button>
        </div>
      </div>
    );
  }
}
function ChildFunc() {
  return (
    <div>
      <div>ChildFunc</div>
      <ctx.Consumer>
        {value => {
          console.log("Consumer", value);
          return (
            <div>
              {value.a}, {value.b}
            </div>
          );
        }}
      </ctx.Consumer>
      <ctx.Consumer>
        {value => {
          return (
            <div><button onClick={() => {value.changeA(value.a + 1)}}>a+1</button></div>
          );
        }}
      </ctx.Consumer>
    </div>
  );
}
