import { useState } from "react"
import userServices from "../services/userServices"
import { Button } from "react-bootstrap"

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
        <div>
            <h1>Register</h1>
            <div className="grid grid-cols-2 w-96 formatted-input gap-2 justify-items-start p-3">
                <label>E-mail: </label>
                <input name="email" type="text" onChange={handleRegisterInput} value={registerInput.email}></input>
                <label>Password: </label>
                <input name="password" type="text" onChange={handleRegisterInput} value={registerInput.password}></input>
                <label>Password again: </label>
                <input name="passwordAgain" type="text" onChange={handleRegisterInput} value={registerInput.passwordAgain}></input>
                <Button onClick={handleRegister}>REGISTER</Button>
            </div>
        </div>
    )

}