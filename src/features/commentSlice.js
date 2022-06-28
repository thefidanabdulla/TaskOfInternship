import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchComments = createAsyncThunk('comments/fetchComments', async ()=>{
    return await fetch(`https://jsonplaceholder.typicode.com/comments`).then((response) => (response.json()))
})

const initialState = {
    status: 'idle',
    error: null,
    comments: []
}

const commentsSlice = createSlice({
    name: 'comments',
    initialState,
    reducers: {

    },
    extraReducers: {
        [fetchComments.pending]: (state) => {
            state.loading = 'loading';
        },
        [fetchComments.fulfilled]: (state, {payload}) => {
            state.comments = payload;
            state.status = 'succes';
        },
        [fetchComments.rejected]: (state, action) => {
            state.status = 'failed';
            state.error = action.error.message
        }
    }
})

export default commentsSlice.reducer;