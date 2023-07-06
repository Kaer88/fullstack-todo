import { useEffect, useState } from "react"
import TodoItem from "./Todo"


export default function ListTodos({ todos, updateTodos }) {
    const [mappebleTodos, setMappableTodos] = useState([])

    useEffect(() => {
        setMappableTodos(todos)
    }, [todos])

    return (
        <div className="todo-list">
            {mappebleTodos?.map((todo) => {
                return (
                    <TodoItem key={todo.id} todo={todo} />
                    // <div key={todo.id} className="todo">
                    //     <p>{todo.text}</p>
                    //     {/true/.test(todo.isdone) ? <p>kész</p> : <p>nincs kész</p>}
                    //     <p>{todo.date.slice(0, 10)}</p>
                    //     <p>{todo.topic_name}</p>
                    //     <button onClick={handleDeleteButton} data-todoid={todo.id}>X</button>
                    // </div>
                )
            })}
        </div>
    )

}