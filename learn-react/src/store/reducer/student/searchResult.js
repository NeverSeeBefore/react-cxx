import { actionTypes } from "../../action/student/searchResult";

const initialState = {
  total: 0,
  isLoading: false,
  student: []
};
/**
 * 控制查询结果
 * @param {*} state
 * @param {*} action
 */
export default function(state = initialState, action) {
  switch (action.type) {
    case actionTypes.setIsLoading:
      return {
        ...state,
        isLoading: action.payload
      };
    case actionTypes.setStudentAndTotal:
      console.log(action);
      return {
        ...state,
        ...action.payload
      };
    default:
      return state;
  }
}
