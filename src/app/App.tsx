import { Navbar } from "widgets/Navbar"
import { AppRoutes } from "./providers/Router"

const App = () => {
    return (
        <div>
            <Navbar />
            <AppRoutes />
        </div>
    )
}

export default App
