import { useContext, useState } from "react"
import todoServices from "../services/todoServices"
import { authContext } from "../contexts/authContext"

export default function NewTodo({ setTodos, todos }) {

    const { authenticatedUser } = useContext(authContext)
    const [inputState, setInputState] = useState({
        text: ""
    })
    const handleInputChange = (e) => {
        setInputState({
            ...inputState,
            [e.target.name]: e.target.value
        })
    }

    const sendTodo = () => {
        try {
            todoServices.sendTodo(inputState, authenticatedUser)
                .then((responseJson) => {
                    console.log(responseJson)
                    setTodos([
                        responseJson[0],
                        ...todos
                    ])
                })
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <div>
            <label>todo text:</label>
            <textarea name="text" onChange={handleInputChange} value={inputState.text}></textarea>
            <button onClick={sendTodo}>Create</button>
        </div>
    )

}