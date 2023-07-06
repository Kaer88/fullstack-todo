import todoServices from "../services/todoServices"
import { useContext } from "react"
import { authContext } from "../contexts/authContext"
import { Card } from "react-bootstrap"



export default function TodoItem({ todo, updateTodos }) {
    const { authenticatedUser } = useContext(authContext)

    const handleDeleteButton = async (e) => {
        try {
            await todoServices.deleteTodo(authenticatedUser, e.target.dataset.todoid)
            updateTodos()
        } catch (err) {
            console.log(err)
        }

    }

    return (
        <Card
            key={todo.id}
            style={{
                minWidth: "15vw",
                maxWidth: "15vw"
            }
            } >
            <Card.Body>
                <p>{todo.text}</p>
                {/true/.test(todo.isdone) ? <p>kész</p> : <p>nincs kész</p>}
                <p>{todo.date.slice(0, 10)}</p>
                <p>{todo.topic_name}</p>
                <button onClick={handleDeleteButton} data-todoid={todo.id}>X</button>
            </Card.Body>
        </Card>
    )

}