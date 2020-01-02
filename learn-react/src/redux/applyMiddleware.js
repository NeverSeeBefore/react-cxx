import compose from "./compose";

/**
 *
 * @param  {...any} args MiddleWares 所有的中间件
 */
export default function applyMiddleware(...args) {
  // console.log(args)

  // createStore：创建仓库的函数
  return function(createStore) {
    // 创建仓库 (reducer, defaultState?)
    return function(reducer, defaultState) {
      const store = createStore(reducer, defaultState);
      const simpleStore = {
        getState: store.getState,
        dispatch: store.dispatch
      };
      let dispatch = () => {
        throw new Error("目前不能使用dispath");
      };
      let dispatchCreators = args.map(fun => fun(simpleStore));
      dispatch = compose(...dispatchCreators)(store.dispatch);

      return {
        ...store,
        dispatch
      };
    };
  };
}
