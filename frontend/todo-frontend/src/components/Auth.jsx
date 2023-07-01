import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";

export default function Auth({ children }) {
    const navigate = useNavigate("/")
    const [cookies] = useCookies("usertoken")

    useEffect(() => {
        if (!cookies.usertoken?.token) navigate("/")
    }, [])

    return (
        children
    )
}