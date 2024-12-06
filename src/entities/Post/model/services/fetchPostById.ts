import { createAsyncThunk } from "@reduxjs/toolkit";
import { Post } from "../types/PostSchema";
import { ThunkConfig } from "app/providers/StoreProvider";

export const fetchPostById = createAsyncThunk<Post, number, ThunkConfig<string>>(
    'post/fetchPostById',
     async (postId, thunkAPI) => {
        try {
            const response = await thunkAPI.extra.api.get(`/posts/${postId}`)
            
            return response.data
        } catch(e) {
            thunkAPI.rejectWithValue('Ошибка при загрузке поста')
        }
    }
)