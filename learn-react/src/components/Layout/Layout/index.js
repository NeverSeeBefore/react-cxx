import React, { Component } from "react";
import PropTypes from "prop-types";
import "./index.css";

class Layout extends Component {
  static propTypes = {
    header: PropTypes.element,
    aside: PropTypes.element,
    children: PropTypes.node
  };

  render() {
    return (
      <div className="container">
        <header className="header">{this.props.header}</header>
        <section className="middle">
          <aside className="aside">{this.props.aside}</aside>
          <main className="main">{this.props.children}</main>
        </section>
      </div>
    );
  }
}

export default Layout;
