import { Post } from "entities/Post";

export interface AddPostSchema {
    data: Post
    isLoading: boolean
    error?: string
}