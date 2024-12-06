import { AxiosInstance } from "axios";
import { PostSchema } from "entities/Post";
import { AddPostSchema } from "features/AddPost";
import { NavigateOptions, To } from "react-router-dom";

export interface StateSchema {
    post: PostSchema
    addPostForm: AddPostSchema
}

interface ThunkExtraArg {
    api: AxiosInstance
    navigate: (to: To, options?: NavigateOptions) => void;
}

export interface ThunkConfig<T> {
    rejectValue: T
    extra: ThunkExtraArg
}