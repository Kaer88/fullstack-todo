import ListTodos from "./ListTodos";


export default function TopicBar({ topicName, todos, updateTodos, topicid }) {
    return (
        <div className="topicbar" data-topicid={topicid}>
            <div>
                <h1>{topicName}</h1>
            </div>
            <ListTodos todos={todos} updateTodos={updateTodos} />
        </div>
    )

}