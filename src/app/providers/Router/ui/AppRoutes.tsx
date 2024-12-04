import { Route, Routes } from "react-router-dom"
import { routeConfig } from "shared/config/routeConfig/routeConfig"

export const AppRoutes = () => {
    return (
    <Routes>
        {Object.values(routeConfig).map(({path, element}) => (
            <Route key={path} path={path} element={element}/>
        ))}
    </Routes>)
}