import React from "react";
import { NavLink, Switch, Route } from "react-router-dom";
import "./News.css";
import NewsHome from "./NewsHome";
import NewsSearch from "./NewsSearch";
import NewsDetail from "./NewsDetail";
import TransitionRoute from "../TransitionRoute";

export default function News(props) {
  return (
    <div style={{ position: "absolute" }}>
      <div className="news-nav">
        <NavLink to="/news" exact>
          新闻首页
        </NavLink>
        <NavLink to="/news/detail">新闻详情页</NavLink>
        <NavLink to="/news/search">新闻搜索页</NavLink>
      </div>
      <div className="new-body">
        
        <TransitionRoute path="/news/detail" component={NewsDetail}></TransitionRoute>
        <TransitionRoute path="/news/search" component={NewsSearch}></TransitionRoute>
        <TransitionRoute path="/news" exact component={NewsHome}></TransitionRoute>
      </div>
    </div>
  );
}
