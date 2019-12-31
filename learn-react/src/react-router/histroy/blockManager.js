export default class BlockManager {
  constructor(getUserConfirmation) {
    this.getUserConfirmation = getUserConfirmation;
  }

  prompt = null;

  /**
   * 设置一个阻塞， 传递一个字符串或返回字符串的函数
   * @param {*} prompt
   */
  block(prompt) {
    if (typeof prompt !== "string" && typeof prompt !== "function") {
      throw new Error("prompt must be a string or function");
    }
    this.prompt = prompt;
    return () => {
      this.prompt = null;
    };
  }

  /**
   * 触发阻塞
   * @param {*} location
   * @param {*} action
   * @param {function} callback 当阻塞完成之后要做的事情，一般是跳转页面
   */
  triggerBlock(location, action, callback) {
    if (!this.prompt) {
      callback();
      return;
    }
    let message;
    if (typeof this.prompt === "string") {
      message = this.prompt;
    } else {
      message = this.prompt(location, action);
    }
    this.getUserConfirmation(message, ok => {
      if (ok === true) {
        callback();
      }
    });
  }
}
