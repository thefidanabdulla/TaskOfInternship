import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "../features/userSlice";
import postsReducer from "../features/postSlice";
import commentsReducer from "../features/commentSlice";

const store = configureStore({
    reducer: {
        users : usersReducer,
        posts: postsReducer,
        comments: commentsReducer,
    }
})

export default store;