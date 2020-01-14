import "./index.scss";
import React, { Component } from 'react';
import { NavLink } from "react-router-dom"

class Aside extends Component {

  render () {
    return (
      <ul className="menu">
        <li><NavLink exact activeClassName="menu-active" to="/students">学生列表</NavLink></li>
        <li><NavLink exact activeClassName="menu-active" to="/students/add">添加学生</NavLink></li>
        <li><NavLink exact activeClassName="menu-active" to="/course">课程列表</NavLink></li>
        <li><NavLink exact activeClassName="menu-active" to="/course/add">添加课程</NavLink></li>
        <li><NavLink exact activeClassName="menu-active" to="/">...</NavLink></li>
      </ul>
    )
  }

}

export default Aside;