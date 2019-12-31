import React, { Component } from "react";
import ctx from "./RouterContext";
import matchPath from "./pathMatch";

class Route extends Component {
  static defaultProps = {
    path: "/"
  };
  matchRoute(location) {
    const { exact = false, strict = false, seneitive } = this.props;
    return matchPath(this.props.path, location.pathname, {
      exact,
      strict,
      seneitive
    });
  }
  renderChildren = ctx => {
    // console.log(this.props);
    if (this.props.children !== undefined && this.props.children !== null) {
      if (typeof this.props.children === "function") {
        return this.props.children(ctx);
      } else {
        return this.props.children;
      }
    }
    if (!ctx.match) {
      return null;
    }
    if (typeof this.props.render === "function") {
      this.props.render(ctx);
    }
    if (this.props.component) {
      const Component = this.props.component;
      return <Component {...ctx}></Component>;
    }
    return null;
  };
  render() {
    return (
      <ctx.Consumer>
        {context => {
          const ctxValue = {};
          ctxValue.history = context.history;
          ctxValue.location = context.location;
          ctxValue.match = this.matchRoute(context.location);
          // console.log(ctxValue);
          return (
            <ctx.Provider value={ctxValue}>
              {this.renderChildren(ctxValue)}
            </ctx.Provider>
          );
        }}
      </ctx.Consumer>
    );
  }
}

export default Route;
