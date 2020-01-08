import { createActions, handleActions } from "redux-actions";

export const { setStudentAndTotal, setIsLoading } = createActions({
  SET_STUDENT_AND_TOTAL: ({ student, total }) => ({ student, total }),
  SET_IS_LOADING: isLoading => isLoading
});

export default handleActions(
  {
    [setStudentAndTotal]: (state, { payload }) => ({ ...state, ...payload }),
    [setIsLoading]: (state, { payload }) => ({ ...state, isLoading: payload })
  },
  {
    total: 0,
    isLoading: false,
    student: []
  }
);
