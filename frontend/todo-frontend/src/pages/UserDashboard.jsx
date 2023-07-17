import ListTodos from "../components/ListTodos";
import { useContext, useEffect, useState } from "react"
import todoServices from "../services/todoServices"
import { authContext } from "../contexts/authContext"
import TopicBar from "../components/TopicBar";
import NewTodo from '../components/NewTodo'
import { Button, Container } from "react-bootstrap";
import NewTopic from "../components/NewTopic";
import { Outlet } from "react-router-dom";
import TopicList from "../components/TopicList";
import Overview from "../components/Overview";
import { dataContext } from "../contexts/dataContext";


export default function UserDashboard() {

    const { authenticatedUser } = useContext(authContext);
    const { contextualData, setContextualData } = useContext(dataContext)
    const [todosData, setTodosData] = useState([]);
    const [topics, setTopics] = useState([]);
    const [newTopicModalState, setNewTopicModalState] = useState(false);
    useEffect(() => {
        updateTodos()
    }, [authenticatedUser])

    const updateTodos = () => {
        if (authenticatedUser.userid) {
            todoServices.getAllTodos(authenticatedUser)
                .then((data) => {
                    setTodosData(data.userTodos)
                    setTopics(data.topics)
                    setContextualData(data)
                })
        }

    }
    const handleNewTopicModal = () => {
        setNewTopicModalState(!newTopicModalState)
    }

    return (
        <div id="userdashboard" className="overflow-hidden overflow-x-scroll min-h-screen mt-6">
 
            <div id="todos-window">
                <div>
                    <Button onClick={handleNewTopicModal}>New topic</Button>
                </div>
                <Container className="flex gap-5">
                    <Overview todosData={todosData} topics={topics} updateTodos={updateTodos} />
                </Container>
            </div>
            {newTopicModalState && <NewTopic updateTodos={updateTodos} show={newTopicModalState} close={handleNewTopicModal} />}

        </div>
    )

}