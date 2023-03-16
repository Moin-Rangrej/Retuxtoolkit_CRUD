import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";

export const getPost = createAsyncThunk("post/getPost",
        async({id}) =>{
            return await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then(response => response.json())
})

const initialState = {
    loading: false,
    post: [],
    error: ""
}

const postSlice = createSlice({
    name: 'post',
    initialState,
    extraReducers :{
        [getPost.pending]:(state) =>{
            state.loading = true
        },
        [getPost.fulfilled]: (state,action) =>{
            state.loading = false
            state.post = action.payload
            state.error = ""
        },
        [getPost.rejected]:(state,action) =>{
            state.loading = false
            state.post = []
            state.error = action.payload
        }
    }
})

export default postSlice.reducer