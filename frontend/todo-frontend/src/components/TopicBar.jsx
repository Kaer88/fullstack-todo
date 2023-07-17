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
        <div data-topicid={topicid}>
            <div className="flex-col align w-48">

                <h4>{topicName}</h4>
                <Button onClick={handleNewTodoModal}>New item</Button>

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