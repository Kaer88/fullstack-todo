import { useEffect } from "react";
import LoginForm from "../components/LoginForm";
import RegisterForm from "../components/RegisterForm";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";


export default function LandingPage() {
    const [cookies] = useCookies("usertoken")
    
    const navigate = useNavigate();
    useEffect(() => {
        if (!Object.keys(!cookies.usertoken?.token)) {
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