import React, { Component } from 'react';
import createBrowserHistory from "./histroy/createBrowserHistory";
import Router from '../react-router-dom/Router';

class BrowserHistory extends Component {

  history = createBrowserHistory(this.props);

  render () {
  return <Router history={this.history}>{this.props.children}</Router>
  }

}

export default BrowserHistory;