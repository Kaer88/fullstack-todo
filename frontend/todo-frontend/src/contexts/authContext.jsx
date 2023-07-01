import { createContext, useState } from "react";

export const authContext = createContext({});

export function AuthProvider({ children }) {

    const [authenticatedUser, setAuthenticatedUser] = useState({})

    return (
        <authContext.Provider value={{ authenticatedUser, setAuthenticatedUser }}>
            {children}
        </authContext.Provider>
    )

}


