import { configureStore, ReducersMapObject } from "@reduxjs/toolkit";
import { StateSchema } from "./StateSchema";
import { postReducer } from "entities/Post/model/slice/postSlice";

export function createReduxStore() {
    const rootState: ReducersMapObject<StateSchema> = {
        post: postReducer
    } 
    
    return configureStore({
        reducer: rootState
    })
}