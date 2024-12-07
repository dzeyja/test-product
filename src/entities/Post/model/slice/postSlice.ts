import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Post, PostSchema } from "../types/PostSchema";
import { fetchPosts } from "../services/fetchPosts";
import { deletePost } from "../services/deletePost";
import { toggleLike } from "../services/toggleLike";
import { fetchPostById } from "../services/fetchPostById";

const initialState: PostSchema = {
    data: [],
    isLoading: false,
    error: '',
    likedFilter: false
}

export const postSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        addPost: (state, action: PayloadAction<Post>) => {
            state.data.push(action.payload)
        },
        toogleLikeFilter: (state) => {
            state.likedFilter = !state.likedFilter
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
                state.isLoading = false
                state.error = action.payload
            })
            // Удаление поста
            .addCase(deletePost.fulfilled, (state, action) => {
                state.data = state.data.filter((post) => post.id !== action.payload)
            })
            .addCase(deletePost.rejected, (state, action) => {
                state.error = action.payload
            })
            // Лайк
            .addCase(toggleLike.fulfilled, (state, action) => {
                const post = state.data.find((post) => post.id === action.payload.id)
                if(post) {
                    post.liked = action.payload.liked
                }
            })
            // Пост по айди
            .addCase(fetchPostById.pending, (state) => {
                state.isLoading = true
            })
            .addCase(fetchPostById.fulfilled, (state, action) => {
                state.isLoading = false
                state.data.push(action.payload)
            })
            .addCase(fetchPostById.rejected, (state, action) => {
                state.isLoading = false
                state.error = action.payload
            })
            
    }
})

export const {actions: postActions} = postSlice
export const {reducer: postReducer} = postSlice