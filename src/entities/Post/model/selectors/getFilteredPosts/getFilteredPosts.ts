import { StateSchema } from "app/providers/StoreProvider";

export const getFilteredPosts = (state: StateSchema) => {
    if (state.post.likedFilter) {
        return state.post.data.filter((post) => post.liked)
    }

    return state.post.data
}