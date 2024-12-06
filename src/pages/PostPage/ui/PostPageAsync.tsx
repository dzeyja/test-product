import { lazy } from "react";

export const PostPageAsync = lazy(() => new Promise((resolve) => {
    //@ts-ignore
    setTimeout(() => resolve(import('./PostPage')))
}))