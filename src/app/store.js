import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "../features/userSlice";
import postsReducer from "../features/postSlice";
import commentsReducer from "../features/commentSlice";
import darkModeReducer from "../features/darkModeSlice";
import langReducer from "../features/langSlice";

const store = configureStore({
    reducer: {
        users : usersReducer,
        posts: postsReducer,
        comments: commentsReducer,
        darkMode: darkModeReducer,
        lang: langReducer,
    }
})

export default store;