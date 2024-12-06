import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "app/providers/StoreProvider";
import { Post } from "entities/Post";

export const deletePost = createAsyncThunk<number, number, ThunkConfig<string>>(
    'post/deletePost',
     async (postId, thunkAPI) => {
        try {
            await thunkAPI.extra.api.delete<Post>(`/posts/${postId}`)
    
            return postId
        } catch(e) {
            thunkAPI.rejectWithValue('Отшибка при удалений поста')
        }
    }
)