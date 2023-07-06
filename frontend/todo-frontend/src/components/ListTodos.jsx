import { useContext, useEffect, useState } from "react"
import { authContext } from "../contexts/authContext"
import todoServices from "../services/todoServices"



export default function ListTodos({ todos, updateTodos }) {
    const [mappebleTodos, setMappableTodos] = useState([])
    const { authenticatedUser } = useContext(authContext)

    useEffect(() => {
        setMappableTodos(todos)
    }, [todos])

    const handleDeleteButton = async (e) => {
        console.log(e.target.dataset.todoid)
        try {
            const responseData = await todoServices.deleteTodo(authenticatedUser, e.target.dataset.todoid)
            updateTodos()
        } catch (err) {
            console.log(err)
        }

    }

    return (
        <div id="todo-container">
            {mappebleTodos?.map((todo) => {
                return (
                    <div key={todo.id} className="todo">
                        <p>{todo.text}</p>
                        {/true/.test(todo.isdone) ? <p>kész</p> : <p>nincs kész</p>}
                        <p>{todo.date.slice(0, 10)}</p>
                        <p>{todo.topic_name}</p>
                        <button onClick={handleDeleteButton} data-todoid={todo.id}>X</button>
                    </div>
                )
            })}
        </div>
    )

}