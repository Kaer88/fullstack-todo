import { useContext, useEffect } from "react";
import { authContext } from "../contexts/authContext";
import { useNavigate } from "react-router-dom";

export default function Auth({ children }) {
    const { authenticatedUser } = useContext(authContext)
    const navigate = useNavigate("/")

    useEffect(() => {
        if (Object.keys(authenticatedUser).length === 0) navigate("/")
    })

    return (
        children
    )
}