import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { Post } from "../types/PostSchema";

export const fetchPosts = createAsyncThunk<Post[], void, {rejectValue: string}>(
    'product/fetchPosts',
     async (_, thunkAPI) => {
        try {
            const response = await axios.get<Post[]>('https://jsonplaceholder.typicode.com/posts', {
                params: {
                    _limit: 10,
                    _page: 1
                }
            })
    
            return response.data
        } catch(e) {
            thunkAPI.rejectWithValue('error')
        }
    }
)