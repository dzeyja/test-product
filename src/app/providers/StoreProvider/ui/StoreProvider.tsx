import { Provider } from "react-redux"
import { createReduxStore } from "../config/store"
import { ReactNode } from "react"
import { useNavigate } from "react-router-dom"

interface StoreProviderProps {
    children: ReactNode
}

export const StoreProvider = ({children}: StoreProviderProps) => {
    const navigate= useNavigate()
    const store = createReduxStore(navigate)

    return (
        <Provider store={store}>
            {children}
        </Provider>
    )
}
