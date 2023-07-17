import { Link } from "react-router-dom"

export default function TopicList({ topics }) {

    return (
        <div>
            {
                topics.map(topic => (
                    <div key={topic.id}>
                        <Link to={`/main/detailed/${topic.id}`}>{topic.name}</Link>
                    </div>
                ))
            }
        </div>
    );

}