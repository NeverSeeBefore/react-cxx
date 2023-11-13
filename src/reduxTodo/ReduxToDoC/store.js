import { configureStore, createSlice } from "@reduxjs/toolkit";


// 创建slice
const todoSlice = createSlice({
  name: 'todo',
  initialState: { list: [] },
  reducers: {
    addToDo(state, { payload }) {
      state.list.push(payload)
    },
    // reducer 可以是一个 reducer函数
    // 也可以是一个对象包含两个函数，一个reducer，一个prepare
    // prepare 是一个 action-creator 函数
    // prepare 的参数，就是调用action时，可以传入的参数
    // prepare 的返回值，需要包含一个payload属性，额外可以有 error、meta属性
    removeToDo: {
      reducer(state, { payload }) {
        state.list = state.list.filter(item => item !== payload)
      },
      prepare(payload) {
        return {
          payload
        }
      }
    }
  }
})

// 创建仓库

export const store = configureStore({
  reducer: {
    todo: todoSlice.reducer
  },
  // devTools: true, // 调了半天不好使，最后更新一下浏览器的插件好使了
});

export const { addToDo: addToDoAction, removeToDo: removeToDoAction } = todoSlice.actions;
