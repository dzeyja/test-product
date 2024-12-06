import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Post, PostSchema } from "../types/PostSchema";
import { fetchPosts } from "../services/fetchPosts";

const initialState: PostSchema = {
    data: [],
    isLoading: false,
    error: ''
}

export const postSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        removePost: (state, action: PayloadAction<number>) => {
            state.data = state.data.filter((post) => post.id !== action.payload)
        },
        addPost: (state, action: PayloadAction<Post>) => {
            state.data.push(action.payload)
        }
    },
    extraReducers: (build) => {
        build 
            .addCase(fetchPosts.pending, (state) => {
                state.isLoading = true
            })
            .addCase(fetchPosts.fulfilled, (state, action: PayloadAction<Post[]>) => {
                state.isLoading = false
                state.data = action.payload
            })
            .addCase(fetchPosts.rejected, (state, action) => {
                state.error = action.payload
            })
    }
})

export const {actions: postActions} = postSlice
export const {reducer: postReducer} = postSlice