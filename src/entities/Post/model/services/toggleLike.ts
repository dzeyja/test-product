import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { Post } from "../types/PostSchema";
import { ThunkConfig } from "app/providers/StoreProvider";

interface ThunkArg {
    id: number
    isLiked: boolean
}

export const toggleLike = createAsyncThunk<Post, ThunkArg, ThunkConfig<string>>(
    'post/toggleLike',
     async ({id, isLiked}, thunkAPI) => {
        try {
            const response = await thunkAPI.extra.api.patch<Post>(`/posts/${id}`, {
                liked: !isLiked
            })
    
            return response.data
        } catch(e) {
            thunkAPI.rejectWithValue('Ошибка при изменений лайка')
        }
    }
)