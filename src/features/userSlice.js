import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchUsers = createAsyncThunk('users/fetchUsers', async ()=>{
    return await fetch(`https://jsonplaceholder.typicode.com/users`).then((response) => (response.json()))
})

const initialState = {
    status: 'idle',
    error: null,
    users: []
}

const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {

    },
    extraReducers: {
        [fetchUsers.pending]: (state) => {
            state.loading = 'loading';
        },
        [fetchUsers.fulfilled]: (state, {payload}) => {
            state.users = payload;
            state.status = 'succes';
        },
        [fetchUsers.rejected]: (state, action) => {
            state.status = 'failed';
            state.error = action.error.message
        }
    }
})

export default usersSlice.reducer;