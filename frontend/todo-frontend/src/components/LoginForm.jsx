import { useState } from "react"
import userServices from "../services/userServices"
import { useCookies } from "react-cookie"

export default function LoginForm() {

    const [cookies, setCookies] = useCookies(["usertoken"])

    const [loginInput, setLoginInput] = useState({
        email: "",
        password: ""
    })

    const handleLoginInput = (e) => {
        setLoginInput({
            ...loginInput,
            [e.target.name]: e.target.value
        })
    }

    const sendLogin = async () => {
        try {
            const responseToken = await userServices.login(loginInput);
            setCookies("usertoken", responseToken.token)
            console.log(responseToken)
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