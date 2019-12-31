import React, { Component } from "react";
import PropTypes from "prop-types";
import ctx from "./RouterContext";
import matchPath from "./pathMatch";

class Router extends Component {
  static propTypes = {
    history: PropTypes.object.isRequired,
    children: PropTypes.node
  };
  state = {
    location: this.props.history.location
  };
  componentDidMount() {
    this.unListen = this.props.history.listen((location, action) => {
      this.props.history.action = action;
      this.setState({
        location: location
      });
    });
  }
  componentWillUnmount() {
    this.unListen();
  }
  ctxValue = {};
  render() {
    this.ctxValue.history = this.props.history;
    this.ctxValue.location = this.state.location;
    this.ctxValue.match = matchPath("/", this.state.location.pathname);
    // console.log(this.props);
    return (
      <ctx.Provider value={this.ctxValue}>{this.props.children}</ctx.Provider>
    );
  }
}

export default Router;
