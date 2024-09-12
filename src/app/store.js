import { combineReducers, configureStore, createSlice } from "@reduxjs/toolkit";
import postsReducer from "../features/posts/postSlice";


// const {} = createSlice({
//     name: ''
// })

export const store = configureStore({
    reducer: {
        posts: postsReducer
    },
})
