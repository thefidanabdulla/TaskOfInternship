import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchPosts = createAsyncThunk('posts/fetchPosts', async ()=>{
    return await fetch(`https://jsonplaceholder.typicode.com/posts`).then((response) => (response.json()))
})

const initialState = {
    status: 'idle',
    error: null,
    posts: []
}

const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        getByUserId : () =>{
            
        }
    },
    extraReducers: {
        [fetchPosts.pending]: (state) => {
            state.loading = 'loading';
        },
        [fetchPosts.fulfilled]: (state, {payload}) => {
            state.posts = payload;
            state.status = 'succes';
        },
        [fetchPosts.rejected]: (state, action) => {
            state.status = 'failed';
            state.error = action.error.message
        }
    }
})

export default postsSlice.reducer;