export default class ListenerManager {
  // 存放监听器
  listeners = [];
  /**
   * 添加一个监听器，返回一个取消监听函数
   */
  addListener(listener){
    this.listeners.push(listener);
    const unListen = () => {
      const index = this.listeners.indexOf(listener);
      this.listeners.splice(index, 1);
    }
    // console.log(this.listeners);
    return unListen;
  }

  /**
   * 触发监听器
   * location
   * action
   */
  triggerListener(location, action){
    for (const listener of this.listeners) {
      listener(location, action);
    }
  }
}

