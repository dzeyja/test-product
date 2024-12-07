import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "app/providers/StoreProvider";
import { Post } from "entities/Post";

export const addPost = createAsyncThunk<Post, Post, ThunkConfig<string>>(
    'post/addPosts',
     async ({id, title, body}, thunkAPI) => {
        try {
            const response = await thunkAPI.extra.api.post<Post>('/posts', {
                id, title, body
            })
    
            if(!response) {
                throw new Error()
            }

            thunkAPI.extra.navigate('/')

            return response.data
        } catch(e) {
            thunkAPI.rejectWithValue('Отшибка при добавлений поста')
        }
    }
)