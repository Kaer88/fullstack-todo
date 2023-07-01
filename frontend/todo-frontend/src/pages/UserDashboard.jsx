import ListTodos from "../components/ListTodos";
import NewTodo from "../components/NewTodo";
import { useContext, useEffect, useState } from "react"
import todoServices from "../services/todoServices"
import { authContext } from "../contexts/authContext"

export default function UserDashboard() {

    const { authenticatedUser, setAuthenticatedUser } = useContext(authContext)
    const [todos, setTodos] = useState([])
    console.log(authenticatedUser)
    useEffect(() => {
        console.log(authenticatedUser)
        if (authenticatedUser.userid) {
            todoServices.getAllTodos(authenticatedUser)
                .then((data) => {
                    setTodos(data)

                })

        }

    }, [authenticatedUser])




    return (
        <div>
            <NewTodo setTodos={setTodos} todos={todos} />
            <ListTodos todos={todos} />
        </div>
    )

}