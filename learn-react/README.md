**属性**
函数本身的属性就是默认属性
Function.defaultProps
Class.defaultPorps || static defaultProps = {}

**默认属性的混合**
对于函数组件，在调用函数之前就完成了
对于类组件，在调用构造函数之前就完成了

**属性的类型检查**
使用prop-types
import PropTypes from 'prop-types'
static propTypes = {
  a: PropTypes.func
}
先混合属性
在调用相应的函数进行校验
PropTypes.number
PropTypes.symbol
PropTypes.node          任何可以被渲染的属性（字符串、数字、react元素， null不会报错）
PropTypes.element       必须是react元素，字符串都不行
PropTypes.elementType   必须是元素类型（可用来传组件）
PropTypes.instanceOf(构造函数)// 必须是指定构造函数的实例（必须传某一类组件的实例）
PropTypes.oneOf([xxx,xxx,xxx]); //必须是数组中的一个
PropTypes.arrayOf(PropTypes.number) // 属性必须时数组，每一项也必须满足要求
PropTypes.shape(对象) 
PropTypes.shape({           // 属性必须满足该对象的要求,可以有更多的属性，但要求的必须要有
      name: PropTypes.string,
      age: PropTypes.number
    })
PropTypes.exact({})//同shape, 但是不允许多属性，要完全与要求相同
PropTypes.oneOfType([PropTypes.number, PropTypes.string]) //属性需要是数组中要求的一个 
自定义属性检查
function(props, propName, componentName){
  
}
