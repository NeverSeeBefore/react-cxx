**高阶组件**
HOC： Higher-Order Component 高阶组件，以组件作为参数，并返回一个组件

组件： function comp () {
  return <h1>这是组件</h1>
}

react组件元素： <comp />
react html element:<h1></h1>

通产，可以利用HOC实现横切关注点

> 举例
> 20个组件在创建组件和销毁组件时，需要做日志记录
> 20个组件，他们需要显示一些内容，得到的数据结构完全一致