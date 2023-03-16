import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";

export const getPost = createAsyncThunk("post/getPost",
        async({postid}) =>{
            return await fetch(`https://jsonplaceholder.typicode.com/posts/${postid}`)
            .then(response => response.json())
})

export const DeletePost = createAsyncThunk("post/deletePost",
    async(postid) => {
        return await fetch(`https://jsonplaceholder.typicode.com/posts/${postid}`,{
            method: "DELETE"
        })
        .then(response => response.json())
    }   
)

export const createPost = createAsyncThunk('post/createPost',
    async({values}) =>{
        return await fetch(`https://jsonplaceholder.typicode.com/posts`,{
            method: "POST",
            headers:{
                Accept: 'application/json',
                "Content-type": "application/json"
            },
            body:JSON.stringify({
                title: values.title,
                body: values.body,
            })
        }).then(response => response.json())
        }
    )

export const updatePost = createAsyncThunk('post/updatePost',
        async({postid,title,body}) =>{
            return await fetch(`https://jsonplaceholder.typicode.com/posts/${postid}`,{
                method:"PUT",
                headers:{
                    Accept: 'application/json',
                    "Content-type": "application/json"
                },
                body:JSON.stringify({
                    title,
                    body
                })
            }).then(response => response.json())
        }
)    


const initialState = {
    loading: false,
    post: [],
    error: "",
    body: "",
    edit: false
}

const postSlice = createSlice({
    name: 'post',
    initialState,
    reducers:{
        setEdit:(state,action) =>{
            state.body = action.payload.body
            state.edit = action.payload.edit
        }
    },
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
        },
        [DeletePost.pending]:(state) =>{
            state.loading = true
        },
        [DeletePost.fulfilled]: (state,action) =>{
            state.loading = false
            state.post = action.payload
            state.error = ""
        },
        [DeletePost.rejected]:(state,action) =>{
            state.loading = false
            state.post = []
            state.error = action.payload
        },
        [createPost.pending]:(state) =>{
            state.loading = true
        },
        [createPost.fulfilled]: (state,action) =>{
            state.loading = false
            state.post = action.payload
            state.error = ""
        },
        [createPost.rejected]:(state,action) =>{
            state.loading = false
            state.post = []
            state.error = action.payload
        },
        [updatePost.pending]:(state) =>{
            state.loading = true
        },
        [updatePost.fulfilled]: (state,action) =>{
            state.loading = false
            state.post = action.payload
            state.error = ""
        },
        [updatePost.rejected]:(state,action) =>{
            state.loading = false
            state.post = []
            state.error = action.payload
        }
    }
})

export const {setEdit} = postSlice.actions
export default postSlice.reducer