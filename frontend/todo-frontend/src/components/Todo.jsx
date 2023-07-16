import todoServices from "../services/todoServices"
import { useContext, useState } from "react"
import { authContext } from "../contexts/authContext"
import { Card, Form } from "react-bootstrap"



export default function TodoItem({ todo, updateTodos }) {
    const { authenticatedUser } = useContext(authContext)
    const [isDone, setIsDone] = useState(todo.isdone)
    const handleDeleteButton = async (e) => {
        try {
            await todoServices.deleteTodo(authenticatedUser, e.target.dataset.todoid)
            updateTodos()
        } catch (err) {
            console.log(err)
        }

    }

    const handleCheck = (e) => {
        setIsDone()
    }
    return (
        <Card
            className="w-60"
            key={todo.id}
        >
            <Card.Body>
                <div className="flex justify-between">
                    <h5>{todo.title}</h5>
                    <Form.Check checked={isDone} onChange={handleCheck}></Form.Check>
                </div>
                <p>{todo.date.slice(0, 10)}</p>
                <p>{todo.topic_name}</p>
                <button onClick={handleDeleteButton} data-todoid={todo.id}>X</button>
            </Card.Body>
        </Card>
    )

}