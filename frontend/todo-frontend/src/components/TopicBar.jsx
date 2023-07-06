import ListTodos from "./ListTodos";


export default function TopicBar({ topicName, todos, updateTodos }) {
    console.log(updateTodos)
    return (
        <div className="topicbar">
            <h1>{topicName}</h1>
            <ListTodos todos={todos} updateTodos={updateTodos} />
        </div>
    )

}