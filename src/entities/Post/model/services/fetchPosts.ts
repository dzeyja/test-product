import { createAsyncThunk } from "@reduxjs/toolkit";
import { Post } from "../types/PostSchema";
import { ThunkConfig } from "app/providers/StoreProvider";

export const fetchPosts = createAsyncThunk<Post[], void, ThunkConfig<string>>(
    'post/fetchPosts',
     async (_, thunkAPI) => {
        try {
            const response = await thunkAPI.extra.api.get<Post[]>('/posts')
    
            return response.data
        } catch(e) {
            thunkAPI.rejectWithValue('error')
        }
    }
)