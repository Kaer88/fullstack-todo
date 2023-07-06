import ListTodos from "../components/ListTodos";
import { useContext, useEffect, useState } from "react"
import todoServices from "../services/todoServices"
import { authContext } from "../contexts/authContext"
import TopicBar from "../components/TopicBar";
import NewTodo from '../components/NewTodo'


export default function UserDashboard() {

    const { authenticatedUser } = useContext(authContext)
    const [todosData, setTodosData] = useState([])
    const [topics, setTopics] = useState([]);

    useEffect(() => {
        updateTodos()
    }, [authenticatedUser])

    const updateTodos = () => {
        if (authenticatedUser.userid) {
            todoServices.getAllTodos(authenticatedUser)
                .then((data) => {
                    setTodosData(data.userTodos)
                    setTopics(data.topics)
                })

        }

    }


    return (
        <div id="userdashboard">
            <NewTodo updateTodos={updateTodos} todos={todosData.userTodos} topics={topics} />

            <div id="todos-window">

                {
                    topics.map((topicBar, idx) =>
                        <TopicBar key={idx} todos={todosData.filter(todo => todo.topic_id === topicBar.id)} topicName={topics[idx].name} topicid={topics[idx].id} updateTodos={updateTodos} />
                    )
                }
            </div>
            {/* <TopicBar todos={todosData.userTodos} topicName={""} /> */}
            {/* <ListTodos todos={todosData.userTodos} /> */}
        </div>
    )

}