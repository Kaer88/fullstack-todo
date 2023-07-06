import ListTodos from "./ListTodos";


export default function TopicBar({ topicName, todos }) {
    console.log("in topicvar", todos)
    return (
        <div className="topicbar">
            <h1>{topicName}</h1>
            <ListTodos todos={todos} />
        </div>
    )

}