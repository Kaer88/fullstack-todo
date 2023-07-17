import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import topicServices from "../services/topicServices";
import { authContext } from "../contexts/authContext";
import TodoItem from "./Todo";
import TopicList from "./TopicList";
import { Button, Container } from "react-bootstrap";
import { dataContext } from "../contexts/dataContext";
import NewTopic from "./NewTopic";
import NewTodo from "./NewTodo";

export default function TopicView() {
    const { topic } = useParams();
    const [items, setItems] = useState([]);
    const { authenticatedUser } = useContext(authContext);
    const { contextualData } = useContext(dataContext);
    const [newTopicModalState, setNewTopicModalState] = useState(false);
    const [showNewTodoModal, setShowNewTodoModal] = useState(false)


    const [topicList, setTopicList] = useState([]);
    useEffect(() => {
        setTopicList(contextualData.topics)
    }, [contextualData]);

    useEffect(() => {
        updateTodos(authenticatedUser, topic)
    }, [topic])

    const updateTodos = async () => {
        try {
            const items = await topicServices.getTopicContent(authenticatedUser, topic);
            setItems(items);
        } catch (err) {
            console.log(err);
        }
    }
    const handleNewTodoModal = () => {
        setShowNewTodoModal(!showNewTodoModal)
    }
    const handleNewTopicModal = () => {
        setNewTopicModalState(!newTopicModalState)
    }

    return (
        <div className="flex">
            <div className="flex-col flex gap-2 p-2">
                <Button onClick={handleNewTopicModal}>New topic</Button>
                <Button onClick={handleNewTodoModal}>New todo</Button>
            </div>
            <TopicList topics={topicList.map(topic => ({ name: topic.name, id: topic.id }))} />
            <div className="grid-flow-column grid">
                {topic &&
                    <>

                        <div>
                            {
                                items.filter(todo => todo.topicid = topic)?.map(item => {
                                    return <TodoItem
                                        key={item.id}
                                        todo={item}
                                        updateTodos={updateTodos}
                                        detailed={true}
                                    />
                                })
                            }
                        </div>
                    </>
                }
            </div>
            {newTopicModalState && <NewTopic updateTodos={updateTodos} show={newTopicModalState} close={handleNewTopicModal} />}
            <NewTodo
                topicid={topic}
                show={showNewTodoModal}
                close={handleNewTodoModal}
                updateTodos={updateTodos} />
        </div>
    );


}