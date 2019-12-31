import ListenerManager from "./listenerManager";
import BlockManager from "./blockManager";

/**
 * 创建一个history对象
 */
export default function createBrowserHistory(options = {}) {
  const {
    basename = "",
    forceRefresh = false,
    keyLength = 6,
    getUserConfirmation = (message, callback) =>
      callback(window.confirm(message))
  } = options;

  const listenerManager = new ListenerManager();
  const blockManager = new BlockManager(getUserConfirmation);

  const history = {
    action: "POP", //初始化都是POP
    length: window.history.length,
    go: go(),
    goBack: goBack(),
    goForward: goForward(),
    push: push,
    replace: replace,
    block: block,
    listen: listen,
    createHref: createHref,
    location: createLocation(basename)
  };

  function go() {
    return window.history.go;
  }
  function goBack() {
    return window.history.back;
  }
  function goForward() {
    return window.history.forward;
  }
  function block(prompt) {
    return blockManager.block(prompt);
  }
  function createHref(location) {
    return basename + location.pathname + location.search + location.hash;
  }
  /**
   * 向地址栈中加入新的地址
   * @param {*} path 新的地址，可以是字符串，也可以是对象
   * @param {*} state 附加的状态数据（如果第一个参数是对象，第二个参数无效）
   */
  function push(path, state) {
    changePage(path, state, true);
  }

  /**
   * 替换当前地址
   * @param {*} path 新的地址，可以是字符串，也可以是对象
   * @param {*} state 附加的状态数据（如果第一个参数是对象，第二个参数无效）
   */
  function replace(path, state) {
    changePage(path, state, false);
  }

  /**
   *  可用于push和replace的抽离的公共代码
   * @param {*} path
   * @param {*} state
   * @param {*} isPush
   */
  function changePage(path, state, isPush) {
    let action = "PUSH";
    if (!isPush) {
      action = "REPlACE";
    }
    const pathInfo = handlePathAndState(path, state);
    pathInfo.path = basename + pathInfo.path;
    // console.log("pathInfo", pathInfo);

    const location = createLocationFromPath(pathInfo, basename);

    // 跳转之前做的事情
    blockManager.triggerBlock(location, action, () => {
      // 完成阻塞之后做的事情
      if (isPush) {
        window.history.pushState(
          {
            key: createKey(keyLength),
            state: pathInfo.state
          },
          null,
          pathInfo.path
        );
      } else {
        window.history.replaceState(
          {
            key: createKey(keyLength),
            state: pathInfo.state
          },
          null,
          pathInfo.path
        );
      }
      // 启动监听函数
      listenerManager.triggerListener(location, action);
      // 先触发事件，再重新赋值；
      history.action = action;
      history.location = location;
      if (forceRefresh) {
        // 强制刷新
        window.location.href = pathInfo.path;
        // console.log("after ", window.location.href, pathInfo.path);
      }
    });
  }

  /**
   * 添加一个监听器，返回取消监听函数
   * @param {*} listener
   */
  function listen(listener) {
    return listenerManager.addListener(listener);
  }
  /**
   * 添加对地址变化的监听
   * （只能监听前进、后退，用户对地址hash的改变）
   * 无法监听pushState、replaceState
   */
  function addDomListener() {
    window.addEventListener("popstate", () => {
      // console.log("添加地址变化事件监听");
      const location = createLocation(basename);
      // 这里并不能阻止跳转，因为是浏览器的事件，所以，能做的只是执行一下用户想要的操作。
      blockManager.triggerBlock(location, "POP", () => {
        listenerManager.triggerListener(location, "POP");
        // 先出发事件，再重新赋值；
        history.location = location;
      });
    });
  }
  addDomListener();

  return history;
}

/**
 * {创建随机字符串
 */

function createKey(keyLength) {
  return Math.random()
    .toString(36)
    .substr(2, keyLength);
}

/**
 * 根据path和state，得到统一的对象格式
 */
function handlePathAndState(path, state) {
  if (typeof path === "string") {
    return {
      path,
      state
    };
  } else if (typeof path === "object") {
    let pathResult = path.pathname;
    let { search = "", hash = "" } = path;
    if (search.charAt(0) !== "?") {
      search = "?" + search;
    }
    if (hash.charAt(0) !== "#") {
      hash = "#" + hash;
    }
    pathResult += search;
    pathResult += hash;
    return { path: pathResult, state: path.state };
  } else {
    throw new Error("path must be a tsring or object");
  }
}

/**
 * 创建location对象
 */
function createLocation(basename = "") {
  const location = {
    hash: window.location.hash,
    search: window.location.search,
    pathname: "",
    state: undefined
  };
  let pathname = window.location.pathname;
  const reg = new RegExp(`^${basename}`);
  location.pathname = pathname.replace(reg, "");

  let state,
    historyState = window.history.state;
  if (historyState === null) {
    // 如果historyState没有值，state为undefined
    state = undefined;
  } else if (typeof historyState !== "object") {
    // 如果state不是对象，直接赋值
    state = historyState;
  } else {
    if ("key" in historyState) {
      // 如果state有key，额外为location设置key
      location.key = historyState.key;
      state = historyState.state;
    } else {
      state = historyState;
    }
  }
  location.state = state;
  return location;
}

/**
 *
 * @param {*} pathInfo {path: "/abc?a=-4&a=4#ddd"}
 * @param {*} basename
 */
function createLocationFromPath(pathInfo, basename) {
  //pathname
  let pathname = pathInfo.path.replace(/[#?].*$/, "");
  // console.log(pathname);
  let reg = new RegExp(`^${basename}`);
  pathname = pathname.replace(reg, "");
  // search
  let search = "";
  var questionIndex = pathInfo.path.indexOf("?");
  var sharpIndex = pathInfo.path.indexOf("#");
  if (questionIndex === -1 || questionIndex > sharpIndex) {
    search = "";
  } else {
    search = pathInfo.path.substring(questionIndex, sharpIndex);
  }
  // hash
  let hash = "";
  if (sharpIndex === -1) {
  } else {
    hash = pathInfo.path.substr(sharpIndex);
  }

  return {
    hash,
    search,
    pathname,
    state: pathInfo.state
  };
}
