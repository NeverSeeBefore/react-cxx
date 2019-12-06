# PureComponent

纯组件，用于避免不必要的渲染，从而提高效率

优化： 如果一个组件的属性和状态都没有发生变化，改组件没有必要重新渲染；

1. PureComponent 是一个组件
使用方法
class task extends PureComponent{
  ...
}

其实就是一个这样的组件，带有shouldComponentUpdate函数
class PureComponent extends Component {
  shouldComponentUpdate(newProps, newState){
    // 浅比较
    return ...
  }
}

1.1 为了效率应该尽量使用PureComponent，这就要求不要改变之前的状态，永远是创建新的状态
1.2 为什么不用深克隆？可能会让性能更差，因为层级比较深的情况。

1.3 有一个第三方库js库，Immutable.js,专门用于制作不可变对象
2. 对于函数组件，React.memo(FuncComponent);得到的是一个函数组件,是一个继承了PureComponent的函数组件；
原理: 
function memo (Comp){
  return class extends PureComponent{
    return <Comp></Comp>
  }
}
