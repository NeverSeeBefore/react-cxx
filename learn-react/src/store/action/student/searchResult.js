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

/**
 * 根据查询条件 --查询学生
 */
function fetchStudents() {
  return async function(dispatch, getState) {
    dispatch(setIsLoadingAction(true));
    const students = await new Promise((reslove, reject) => {
      setTimeout(() => {
        const condition = getState().students.searchCondition;
        reslove(getStudentList({ condition }));
      }, 3000);
    }).then(res => {
      return res;
    });
    console.log(students);
    dispatch(
      setStudentAndTotalAction({
        student: students.data,
        total: students.total
      })
    );
    dispatch(setIsLoadingAction(true));
    return students;
  };
}

export {
  actionTypes,
  setStudentAndTotalAction,
  setIsLoadingAction,
  fetchStudents
};
