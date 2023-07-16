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


export default function UserDashboard() {

    const { authenticatedUser } = useContext(authContext);
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
                })
        }

    }

    const handleNewTopicModal = () => {
        setNewTopicModalState(!newTopicModalState)
    }

    return (
        <div id="userdashboard">
            <div className='flex justify-center container my-3 py-3'>
            </div>
            <div id="todos-window">
                <div>
                    <Button onClick={handleNewTopicModal}>New topic</Button>
                </div>
                <Container>
                
                    <TopicList topics={topics.map(topic => { return { name: topic.name, id: topic.id } })} />
                    
                </Container>
               

                {
                    topics.map((topicBar, idx) =>
                        <TopicBar
                            key={idx}
                            todos={todosData.filter(todo => todo.topic_id === topicBar.id)}
                            topicName={topics[idx].name}
                            topicid={topics[idx].id}
                            updateTodos={updateTodos}
                            topics={topics}
                        />
                    )
                }
            </div>
            {newTopicModalState && <NewTopic updateTodos={updateTodos} show={newTopicModalState} close={handleNewTopicModal} />}
            <div>
            </div>
        </div>
    )

}