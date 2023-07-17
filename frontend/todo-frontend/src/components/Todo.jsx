import todoServices from "../services/todoServices"
import { useContext } from "react"
import { authContext } from "../contexts/authContext"
import { Badge, Button, Card, Container } from "react-bootstrap"
import { Link } from "react-router-dom";



export default function TodoItem({ todo, updateTodos, detailed }) {
    const { authenticatedUser } = useContext(authContext);

    const handleDeleteButton = async (e) => {
        try {
            await todoServices.deleteTodo(authenticatedUser, e.target.dataset.todoid);
            updateTodos();
        } catch (err) {
            console.log(err);
        }

    };

    const handleCheckBtn = async () => {
        try {
            await todoServices.updateTodo(authenticatedUser, todo.id, { isDone: !todo.isdone });
            updateTodos();

        } catch (err) {
            throw new Error('Update error');
        };

    };

    return (
        <Card
            className="w-60"
            key={todo.id}
        >
            <Card.Body>
                <Card.Title className="flex justify-between">
                    {todo.title}
                </Card.Title>
                <Badge>{todo.date.slice(0, 10).replace(/-/g, ".")}</Badge>
                {
                    detailed &&
                    <div>
                        <p>
                            {todo.text}
                        </p>
                    </div>

                }
            </Card.Body>
            <Card.Footer className="flex justify-between items-center">

                <Button
                    variant={todo.isdone ? "outline-secondary" : "outline-success"}
                    onClick={handleCheckBtn}

                >
                    {todo.isdone ? "Archive" : "Restore"}
                </Button>
                <Button onClick={handleDeleteButton} data-todoid={todo.id}>Delete</Button>
            </Card.Footer>
        </Card>
    );

};