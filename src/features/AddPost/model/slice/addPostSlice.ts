import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AddPostSchema } from "../types/AddPostSchema";
import { addPost } from "../services/addPost";

const initialState: AddPostSchema = {
    data: {
        id: 0,
        title: '',
        body: '',
        liked: false
    },
    isLoading: false,
    error: ''
}

export const addPostSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        setTitle: (state, action: PayloadAction<string>) => {
            state.data.title = action.payload
        },
        setBody: (state, action: PayloadAction<string>) => {
            state.data.body = action.payload
        }
    },
    extraReducers: (build) => {
        build
            .addCase(addPost.pending, (state) => {
                state.isLoading = true
            })
            .addCase(addPost.fulfilled, (state) => {
                state.isLoading = false
            })
            .addCase(addPost.rejected, (state, action) => {
                state.error = action.payload
            })
    }
})

export const {actions: addPostActions} = addPostSlice
export const {reducer: addPostReducer} = addPostSlice