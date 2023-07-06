import { useEffect, useState } from "react"


export default function ListTodos({ todos }) {

    const [mappebleTodos, setMappableTodos] = useState([])

    useEffect(() => {
        setMappableTodos(todos)
    }, [todos])

    return (
        <div id="todo-container">
            {mappebleTodos?.map((todo) => {
                return (
                    <div key={todo.id} className="todo">
                        <p>{todo.text}</p>
                        {/true/.test(todo.isdone) ? <p>kész</p> : <p>nincs kész</p>}
                        <p>{todo.date.slice(0,10)}</p>
                        <p>{todo.topic_name}</p>
                    </div>
                )
            })}
        </div>
    )

}