# 路由组件

React-Router 为我们提供了两个重要的组件

# Router 组件

> 它本身不做任何展示，进提供路由模式匹配
> 会产生一个上下文， 上下文会提供一些实用的对象方法，供其他组件使用

1. HashRouter: 改组件使用 hash 模式
2. BrowserRouter: 改组件使用 history 模式

> 通常情况，路由组件只有一个

# Route 组件

> 根据不同地址，展示不同组件

<route path="匹配的路径" component="要显示的组件"/>

> path: 默认情况下，不区分大小写 senstive 为 true 时区分大小写
> 可以写在任意位置

> 写在 Router 中的内容一定会被渲染，（如过 Router 在 Switch 中时，不会渲染）
> <Route path="/content">
    {() => <div style={{ color: "orange" }}>abcdef</div>}
  </Route>

# Switch 组件

> 写在 switch 组件中的 Route,匹配到第一个组件后，会立即停止匹配
> 只允许添加 Route 到 Switch 中
