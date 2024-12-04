import { HomePage } from "pages/HomePage"
import { RouteProps } from "react-router-dom"

export enum AppRoutes {
    MAIN = 'main',
    PRODUCT = 'product'
}

export const AppPaths: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: '/',
    [AppRoutes.PRODUCT]: 'products/:id'
}

export const routeConfig: Record<AppRoutes, RouteProps> = {
    [AppRoutes.MAIN]: {
        path: AppPaths.main,
        element: <HomePage />
    },
    [AppRoutes.PRODUCT]: {
        path: AppPaths.product,
        element: null
    }
}