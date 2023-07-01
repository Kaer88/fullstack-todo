import { createContext, useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";

export const authContext = createContext({});

export function AuthProvider({ children }) {
    const [cookies, setCookies] = useCookies(["usertoken"])
    const [authenticatedUser, setAuthenticatedUser] = useState({})
   
    useEffect(() => {
        if(cookies) {
            setAuthenticatedUser(cookies)}
    })



    return (
        <authContext.Provider value={{ authenticatedUser, setAuthenticatedUser }}>
            {children}
        </authContext.Provider>
    )

}


