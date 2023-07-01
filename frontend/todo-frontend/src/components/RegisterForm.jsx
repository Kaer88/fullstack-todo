import { useState } from "react"
import userServices from "../services/userServices"

export default function RegisterForm() {

    const [registerInput, setRegisterInput] = useState({
        email: "",
        password: "",
        passwordAgain: ""
    })

    const handleRegisterInput = (e) => {

        setRegisterInput({
            ...registerInput,
            [e.target.name]: e.target.value
        })

    }

    const handleRegister = () => {
        try {
            userServices.register(registerInput);
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <div id="register-form">
            <h1>Register</h1>
            <div>
                <label>E-mail address</label>
                <input name="email" type="text" onChange={handleRegisterInput} value={registerInput.email}></input>
                <label>Password</label>
                <input name="password" type="text" onChange={handleRegisterInput} value={registerInput.password}></input>
                <label>Password again</label>
                <input name="passwordAgain" type="text" onChange={handleRegisterInput} value={registerInput.passwordAgain}></input>
                <button onClick={handleRegister}>REGISTER</button>
            </div>
        </div>
    )

}