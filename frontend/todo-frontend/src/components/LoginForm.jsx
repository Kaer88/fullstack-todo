import { useContext, useState } from "react"
import userServices from "../services/userServices"
import { useCookies } from "react-cookie"
import { useNavigate } from "react-router-dom"
import { authContext } from "../contexts/authContext"

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
        })
    }
    console.log(authenticatedUser)
    const sendLogin = async () => {
        try {
            const responseToken = await userServices.login(loginInput);
            setCookies("usertoken", responseToken.token)
            console.log(responseToken)
            setAuthenticatedUser({
                ...responseToken
            })
            navigate("/protected")
        } catch (err) {
            console.log(err)
        }

    }

    return (
        <div>
            <h1>Login</h1>
            <div>
                <label htmlFor="">E-mail</label>
                <input type="text" name="email" onChange={handleLoginInput} value={loginInput.email} />
                <label htmlFor="">Password</label>
                <input type="text" name="password" onChange={handleLoginInput} value={loginInput.password} />
                <button onClick={sendLogin}>LOGIN</button>
            </div>
        </div>
    )

}