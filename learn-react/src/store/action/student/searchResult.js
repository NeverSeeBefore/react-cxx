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

/**
 * 根据查询条件 --查询学生
 * 使用 redux-promise中间件
 * 触发action，需要使用reslove
 */
//  1 action 是一个 promise
function fetchStudentsPromise() {
  return new Promise((reslove, reject) => {
    setTimeout(() => {
      const action = setStudentAndTotalAction({
        student: [{ a: "aaa", b: "bbb" }],
        total: 1
      });
      reslove(action);
    }, 3000);
  });
}
//  2 : actionCreator 是一个 promise
// async function fetchStudentsPromise(condition) {
//   return await new Promise((reslove, reject) => {
//     setTimeout(() => {
//       const action = setStudentAndTotalAction({
//         student: [{ a: "aaa", b: "bbb" }],
//         total: 1
//       });
//       reslove(action);
//     }, 3000);
//   });
// }
//  3 : payload 是 promise
// function fetchStudentsPromise() {
//   return {
//     type: actionTypes.setStudentAndTotal,
//     payload: new Promise((reslove, reject) => {
//       setTimeout(() => {
//         const condition = getState().students.searchCondition;
//         reslove(getStudentList({ condition }));
//       }, 3000);
//     }).then(res => {
//       return {
//         student: [{ a: "aaa", b: "bbb" }],
//         total: 1
//       };
//     })
//   };
// }

export {
  actionTypes,
  setStudentAndTotalAction,
  setIsLoadingAction,
  fetchStudents,
  fetchStudentsPromise
};
