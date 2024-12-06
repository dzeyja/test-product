import { StateSchema } from "app/providers/StoreProvider";

export const getPostById = (state: StateSchema, id: number) => state.post.data.find((post) => post.id === id)