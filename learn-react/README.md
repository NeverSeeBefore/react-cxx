**ref**

reference

场景：希望通过使用dom元素中的某个方法，或者希望直接使用自定义组件中的某个方法

1. ref作用于内置的html组件，得到的将是真实的dom对象
2. ref作用于类组件，得到的将是类的对象
3. Function components cannot be given refs;

ref 不在推荐使用字符串赋值;将来可能移除使用子符串的方式
推荐使用对象或函数--通过使用**React.createRef**来创建;

**对象**
一般在构造函数里使用React.createRef创建对象，避免每次渲染都重新创建
**函数**
ref={el => this.XXX = el}
函数被调用的时刻：
1. componentDidMount();  此时已经可以使用ref
2. 如果ref的值发生了变动（旧的函数被新的函数替代），分别调用旧的函数以及新的函数，在componentDidUpdate之前
  1. 旧的函数被调用时，传递的是null
  2. 新的函数被调用，传递的是对象

可以把函数卸载类上，作为实例方法，这样就不会执行两次（ref=this.handleRef);
有的时候，确实希望可以执行两次

3. 在ref组件被卸载的时候会执行该函数  

**谨慎使用ref**
能够使用属性和状态进行控制，就不要使用ref。
1. 某个时候要调用真是DOM中的的方法
2. 某个时候需要调用类组件的方法
