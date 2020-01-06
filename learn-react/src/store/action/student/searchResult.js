import { getStudentList } from "../../../services/student";
/**
 * 学生查询条件的action
 */
const actionTypes = {
  setStudentAndTotal: Symbol("setStudentAndTotal"),
  setIsLoading: Symbol("setIsLoading")
};
/**
 * 根据查询条件返回action
 * @param {*} payload
 */

function setStudentAndTotalAction({ student, total }) {
  return {
    type: actionTypes.setStudentAndTotal,
    payload: {
      student,
      total
    }
  };
}
function setIsLoadingAction(payload) {
  return {
    type: actionTypes.setIsLoading,
    payload
  };
}


export {
  actionTypes,
  setStudentAndTotalAction,
  setIsLoadingAction,
};
