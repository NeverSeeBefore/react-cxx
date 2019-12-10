# react 中的事件

react内置的dom组件中的事件

1. 给document注册时间
2. **几乎**所有元素的事件处理都在document的事件中处理,**focus**事件是不冒泡的，所以根本不可能用document代替
3. 在document的事件处理，react会根据虚拟dom树，依次完成事件的处理
4. React的事件参数，不是真实的dom事件参数，是react合成的对象;

如果给真实的dom元素阻止冒泡，会导致react事件不发触发；
给真实dom注册事件，会先于react的事件触发
通过react注册冒泡不能阻止真实dom注册的事件

通过react的参数获取真是dom的事件参数  **e.nativeEvent**
**e.stopImmediatePropagation**  阻止document上剩余事件的执行;


**react事件对象是被重用的**
如果在事件处理程序中，不要异步的使用事件对象
如果一定要异步使用，需要调用  **e.persist();**  持久化这个事件对象；