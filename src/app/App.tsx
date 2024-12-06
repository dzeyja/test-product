import { Navbar } from "widgets/Navbar"
import { AppRoutes } from "./providers/Router"
import { Suspense } from "react"
import { Loader } from "shared/ui/Loader/Loader"

const App = () => {
    return (
        <div>
            <Navbar />
            <Suspense fallback={<Loader />}>
                <AppRoutes />
            </Suspense>
        </div>
    )
}

export default App
