import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import topicServices from "../services/topicServices";
import { authContext } from "../contexts/authContext";
import TodoItem from "./Todo";

export default function TopicView() {
    const { topic } = useParams()
    const [items, setItems] = useState([])
    const { authenticatedUser } = useContext(authContext)

    useEffect(() => {
        updateTodos();
    }, [authenticatedUser, topic])

    const updateTodos = async () => {
        try {
            const items = await topicServices.getTopicContent(authenticatedUser, topic);
            setItems(items)
        } catch (err) {
            console.log(err)
        }
    }
    return (
        <div className="grid-flow-column grid">
            {items?.map(item => {
                return <TodoItem
                    key={item.id}
                    todo={item}
                    updateTodos={updateTodos} />
            })}
        </div>
    );


}