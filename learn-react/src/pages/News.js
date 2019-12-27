import React from "react";
import { Link } from "react-router-dom";

export default function News(props) {
  return (
    <>
      <div>News</div>
      <Link to="/news/home">新闻首页</Link>
      <Link to="/news/detail">新闻详情页</Link>
      <Link to="/news/search">新闻搜索页</Link>
      <div>{props.children}</div>
    </>
  );
}
