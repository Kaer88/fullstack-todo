import { Button } from "react-bootstrap";
import ListTodos from "./ListTodos";
import { useState } from "react";
import NewTodo from "./NewTodo";


export default function TopicBar({ topicName, todos, updateTodos, topicid, topics }) {
    const [showNewTodoModal, setShowNewTodoModal] = useState(false)
    const handleNewTodoModal = () => {
        setShowNewTodoModal(!showNewTodoModal)
    }


    return (
        <div className="topicbar" data-topicid={topicid}>
            <div>
                <h4 style={{ textAlign: "center" }}>{topicName}</h4>
                <Button onClick={handleNewTodoModal}>+</Button>
                <NewTodo
                    topics={topics}
                    topicid={topicid}
                    show={showNewTodoModal}
                    close={handleNewTodoModal}
                    updateTodos={updateTodos} />
            </div>
            <ListTodos
                todos={todos}
                updateTodos={updateTodos}
            />
        </div>
    )

}