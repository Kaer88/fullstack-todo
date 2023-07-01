import { useContext, useEffect } from "react";
import LoginForm from "../components/LoginForm";
import RegisterForm from "../components/RegisterForm";
import { authContext } from "../contexts/authContext";
import { useNavigate } from "react-router-dom";

export default function LandingPage() {
    const { authenticatedUser } = useContext(authContext)
    const navigate = useNavigate()
    useEffect(() => {
        if (authenticatedUser) {
            navigate("/protected")
        }
    }, [])

    return (
        <>
            <RegisterForm />
            <LoginForm />
        </>
    )

}