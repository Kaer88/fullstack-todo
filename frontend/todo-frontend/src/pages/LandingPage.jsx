import { useEffect, useState } from "react";
import LoginForm from "../components/LoginForm";
import RegisterForm from "../components/RegisterForm";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";


export default function LandingPage() {
    const [cookies] = useCookies("usertoken")
    const [displayLogin, setDisplayLogin] = useState(true)
    const navigate = useNavigate();

    useEffect(() => {
        if (!Object.keys(!cookies.usertoken?.token)) {
            navigate("/protected")
        }
    }, [])

    return (
            <div className="h-screen bg-zinc-600 w-screen pt-5 border">
                <div className="flex w-1/3 flex-col mx-auto gap-4 text-center bg-slate-400 h-80">
                    <div className="grid grid-cols-2 bg-slate-600 gap-1" >
                        <div onClick={() => setDisplayLogin(!displayLogin)} className={`p-3 border-2 font-bold transition-colors ${displayLogin ? "bg-slate-500 text-black" : "bg-slate-800 text-white"}`}>Register</div>
                        <div onClick={() => setDisplayLogin(!displayLogin)} className={`p-3 border-2 font-bold transition-colors ${displayLogin ? "bg-slate-800 text-white" : "bg-slate-500 text-black"}`}>Login</div>
                    </div>
                    {displayLogin ? <LoginForm /> : <RegisterForm />}

                </div >
            </div>
        
    )

}