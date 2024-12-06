import { configureStore, getDefaultMiddleware, ReducersMapObject } from "@reduxjs/toolkit";
import { StateSchema } from "./StateSchema";
import { postReducer } from "entities/Post/model/slice/postSlice";
import { addPostReducer } from "features/AddPost";
import { $api } from "shared/api/api";
import { NavigateOptions, To } from "react-router-dom";

export function createReduxStore(navigate?: (to: To, options?: NavigateOptions) => void) {
    const rootState: ReducersMapObject<StateSchema> = {
        post: postReducer,
        addPostForm: addPostReducer,
    } 
    
    return configureStore({
        reducer: rootState,
        middleware: getDefaultMiddleware => getDefaultMiddleware({
            thunk: {
                extraArgument: {
                    api: $api,
                    navigate
                }
            }
        })
    })
}

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch']