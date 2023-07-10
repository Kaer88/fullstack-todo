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
                    <TodoItem
                        key={todo.id}
                        todo={todo}
                        updateTodos={updateTodos} />
                )
            })}
        </div>
    )

}