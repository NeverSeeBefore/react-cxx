/**
 * 学生查询条件的action
 */
const actionTypes = {
  change: Symbol("change")
};
/**
 * 根据查询条件返回action
 * @param {*} payload
 */

 function createChangeAction(payload) {
  return {
    type: actionTypes.change,
    payload
  };
}

export { actionTypes, createChangeAction };
