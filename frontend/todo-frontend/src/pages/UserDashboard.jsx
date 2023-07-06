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

    console.log(topics);
    useEffect(() => {
        if (authenticatedUser.userid) {
            todoServices.getAllTodos(authenticatedUser)
                .then((data) => {
                    console.log(data)

                    setTodosData(data.userTodos)
                    setTopics(data.topics)
                })

        }

    }, [authenticatedUser])
    console.log("topics: ", topics)
    console.log(todosData)
    return (
        <div id="userdashboard">
            <div id="todos">
                {
                    topics.map((topicBar, idx) =>
                        <TopicBar todos={todosData.filter(todo => todo.topic_id === topicBar.id)} topicName={topics[idx].name} />
                    )
                }
            </div>
            {/* <TopicBar todos={todosData.userTodos} topicName={""} /> */}
            <NewTodo setTodosData={setTodosData} todos={todosData.userTodos} />
            {/* <ListTodos todos={todosData.userTodos} /> */}
        </div>
    )

}