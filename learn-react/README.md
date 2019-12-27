# 路由组件

React-Router 为我们提供了两个重要的组件

# Router 组件

> 它本身不做任何展示，进提供路由模式匹配
> 会产生一个上下文， 上下文会提供一些实用的对象方法，供其他组件使用
> 不能直接使用上下文，对开发者时隐藏的；Route 组件如果匹配到了，会将上下文作文属性传给组件；

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

## 路由信息

Route 组件如果匹配到了，会将上下文作文属性传给组件；
**history**
不是 window.history,是合成对象

> 为什么不直接使用 window 的 history，而是费力合成了一个新的对象
> 因为如果 react 有两种模式，如果用 window 的 history，像切换模式时，有很多代码的修改
> 会导致 react 无法知晓地址是否发生变化，会导致无法刷新组件；

1. history.push() 将地址加入历史记录栈
   参数 1) 新的地址 2) （可选）附加的状态数据
2. history.replace() 替换
   参数 1) 新的地址 2) （可选）附加的状态数据
3. go
4. forward
5. back
   **location**
   props.history.location === props.location
   location 记录了地址中都有哪些信息
   {
   hash: "#eawed"
   pathname: "/a"
   search: "?a=sss&b=ddd"
   state: "附加数据"
   }
   > 可使用 query-string 解析 hash 和 search

**match**
路由匹配的关键信息
{
isExact: true // 实际的路径于当前路径是否一样（与是否设置 exact 没有关系）
params:
day: "25"
month: "12"
year: "2019"
**proto**: Object
path: "/news/:year/:month/:day" // 匹配规则（path 可以写成数组）
url: "/news/2019/12/25"  
 **proto**: Object
staticContext: undefined
}

** 向页面传递数据的方式：**

1. 使用 state： 在页面 push 时，加入 state
2. 利用 search： 把数据填写到地址来？后边
3. 利用 hash：数据写道#后边
4. 利用 params：把数据填写到路径中
   <Route path="/news/:year/:month/:day" exact component={News}></Route>
   string Pattrn /:XXX 匹配 XXX（-:XXX 也好用）
   /:XXX? 传则匹配，不传则忽略
   /:XXX(\d+) 匹配必须是数字，（正则表达式）
   react-router 使用了第三方库 path-to-regexp

## 非路由组件获取路由信息

1. 将父路由信息一层层传递到改组件
2. 使用 react-router 提供的高阶组件包装该组件，这个高阶组件会把路由信息传入 withRouter(Comp)

## 其他组件

**Link**

属性

1. to="页面路径"
   to={{
      pathname: "/a",
      hash: "#abcde",
      search: "a=1&b=2"
  }}
2. replace 
  默认false， 采取push跳转
3. innerRef (传入函数或者ref)
  可以将内部的a附加ref

**NavLink**
*Link组件具备的功能，NavLink都有。*
额外功能是：根据当前地址和链接地址决定当前该元素的*样式*
*activeClassName*属性：设置匹配时的类名;
*activeStyle*属性：设置匹配时的内联样式;
*exact*:是否精确匹配;
*sensitive*:区分大小写;
*strict*:是否严格匹配最后的一个 /

**Redirect**
Redirect : 当加载到该组件时，会无刷新跳转到另一个地址
属性：
1. push
  默认为false，采取replace方式跳转
2. from
  当匹配到from地址规则时才跳转
  eg: <Redirect from="/abc" to="/a"></Redirect>
  eg: <Redirect from="/abc/:id" to="/a"></Redirect>
3. *exact* *sensitive* *strict*

——————————————————————————————————————————————————————————————
vue-router 是静态的配置
react-router v4之前也是静态的配置，之后改成了动态的组件