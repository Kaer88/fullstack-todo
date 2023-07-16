import { useContext, useState } from "react"
import userServices from "../services/userServices"
import { useCookies } from "react-cookie"
import { useNavigate } from "react-router-dom"
import { authContext } from "../contexts/authContext"
import { Button } from "react-bootstrap"

export default function LoginForm() {

    const [cookies, setCookies] = useCookies(["usertoken"])
    const { authenticatedUser, setAuthenticatedUser } = useContext(authContext)
    const [loginInput, setLoginInput] = useState({
        email: "",
        password: ""
    })
    const navigate = useNavigate()

    const handleLoginInput = (e) => {
        setLoginInput({
            ...loginInput,
            [e.target.name]: e.target.value
        });
    }
    
    const sendLogin = async () => {
        try {
            const responseToken = await userServices.login(loginInput);
            setCookies("usertoken", responseToken);
            setAuthenticatedUser({
                ...responseToken
            });
            navigate("/main");
        } catch (err) {
            console.log(err);
        }

    }

    return (
        <div>
            <h1>Login</h1>
            <div className="grid grid-cols-2 w-96 formatted-input gap-2 justify-items-start p-3">
                <label htmlFor="">E-mail</label>
                <input type="text" name="email" onChange={handleLoginInput} value={loginInput.email} />
                <label htmlFor="">Password</label>
                <input type="text" name="password" onChange={handleLoginInput} value={loginInput.password} />
                <Button onClick={sendLogin}>LOGIN</Button>
            </div>
        </div>
    )

}