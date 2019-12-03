ref 转发

// 创建一个函数组件，参数需额外添加一个用于接收ref
function FunctionComponent(prop, ref){
  console.log(ref);
  return(
    <div ref={ref}></div>
  )
}
// 使用React.forwardRef函数，传入函数组件，接收返回的新组件
const NewFunctionComponent =  React.forwardRef(FunctionComponent)
// 使用NewFunctionComponent组件
class App extends Component {
  aRef = React.createRef();
  render () {
    return (
      <NewFunctionComponent ref={this.aRef}/>
    )
  }
}

// ref被转发到FunctionComponent，内部可以为ref做更改