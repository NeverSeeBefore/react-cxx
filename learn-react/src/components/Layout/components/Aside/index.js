import "./index.css";
import React, { Component } from 'react';

class Aside extends Component {

  render () {
    return (
      <ul className="menu">
        <li><a href="/students">学生列表</a></li>
        <li><a href="/students/add">添加学生</a></li>
        <li><a href="/course">课程列表</a></li>
        <li><a href="/course/add">添加课程</a></li>
        <li><a href="/">...</a></li>
      </ul>
    )
  }

}

export default Aside;