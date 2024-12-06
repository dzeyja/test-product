import { lazy } from "react";

export const CreatePostPageAsync = lazy(() => new Promise((resolve) => {
    //@ts-ignore
    setTimeout(() => resolve(import('./CreatePostPage')))
}))