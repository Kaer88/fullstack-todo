import { Container } from "react-bootstrap";
import TopicBar from "./TopicBar";

export default function Overview({ todosData, topics, updateTodos }) {
    return (
        <Container>
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
        </Container>
    )
}