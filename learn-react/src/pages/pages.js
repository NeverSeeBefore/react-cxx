import React from 'react';
import { NavLink } from 'react-router-dom';
import "./pages.css";

export default function NavBar (props) {

  return (
      <div className="header" >
        <NavLink to="/" exact>首页</NavLink>
        <NavLink to="/news">新闻页</NavLink>
        <NavLink to="/personal">个人中心</NavLink>
        {/* <NavLink to="/"></NavLink> */}
      </div>
    )

}

