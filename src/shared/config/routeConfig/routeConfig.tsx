import { CreatePostPage } from "pages/CreatePostPage"
import { HomePage } from "pages/HomePage"
import { PostPage } from "pages/PostPage"
import { RouteProps } from "react-router-dom"

export enum AppRoutes {
    MAIN = 'main',
    POST = 'post',
    CREATE_POST = 'create_post'
}

export const AppPaths: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: '/',
    [AppRoutes.POST]: '/posts/:id',
    [AppRoutes.CREATE_POST]: '/create-post'
}

export const routeConfig: Record<AppRoutes, RouteProps> = {
    [AppRoutes.MAIN]: {
        path: AppPaths.main,
        element: <HomePage />
    },
    [AppRoutes.POST]: {
        path: AppPaths.post,
        element: <PostPage/>
    },
    [AppRoutes.CREATE_POST]: {
        path: AppPaths.create_post,
        element: <CreatePostPage />
    }
}