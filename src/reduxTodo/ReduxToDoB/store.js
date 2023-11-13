import { combineReducers, createStore } from "redux";



// actionType
const addToDo = 'addToDo';
const removeTodo = 'removeTodo';

// action
export function addToDoAction(text) {
  return {
    type: addToDo,
    payload: text,
  }
}

export function removeToDoAction(text) {
  return {
    type: removeTodo,
    payload: text,
  }
}

const initialState = {
  list: [],
}

// reducer
export const toDoReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case addToDo:
      return {
        ...state,
        list: [...state.list, payload]
      }
    case removeTodo:
      return {
        ...state,
        list: state.list.filter(item => item !== payload)
      }
    default:
      return state;
  }
}


// 通过createstore生成仓库
export const store = createStore(
  combineReducers({
    todo: toDoReducer
  }),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  // applyMiddleware(logger)
);