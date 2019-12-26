import "./index.css";
import React, { Component } from 'react';

class Header extends Component {

  render () {
    return (
      <div className="header-content">
        <div className="title">Header</div>
        <div className="user">
          <span className="user-name">用户名</span>
          <button className="exit">退出</button>
        </div>
      </div>
    )
  }

}

export default Header;
