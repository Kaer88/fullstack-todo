import { Children, createContext, useState } from "react";

export const dataContext = createContext()

export const DataContextProvider = ({ children }) => {
    const [contextualData, setContextualData] = useState({})
    return (
        <dataContext.Provider value={{ contextualData, setContextualData }}>
            {children}
        </dataContext.Provider>
    )

}

