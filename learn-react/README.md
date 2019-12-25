npm install react-router-dom

## Hash Router 哈希路由
根据url中的哈希值来确定显示组件
> 不会导致页面刷新
> 兼容性好，都支持


# Browser History Router 浏览器历史记录路由

> 以前路径改变一定会刷新页面，现在可以实现不刷新
1. history.pushState()
  参数
  1. {}/'' 附件数据
  2. '' 页面标题
  3. "/a/b/c" 新的地址
2. .replaceState()
  参数相同

