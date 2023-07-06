import { useContext, useState } from "react"
import todoServices from "../services/todoServices"
import { authContext } from "../contexts/authContext"
import { Button, Container, Modal } from "react-bootstrap"

export default function NewTodo({ topics, updateTodos, show, close, topicid }) {

    const { authenticatedUser } = useContext(authContext);
    const [inputState, setInputState] = useState({
        text: ""
    });

    const handleInputChange = (e) => {
        setInputState({
            ...inputState,
            [e.target.name]: e.target.value
        });
    };

    const sendTodo = () => {
        try {
            const dataToUpload = { ...inputState, topicid }
            todoServices.sendTodo(dataToUpload, authenticatedUser)
                .then(() => {
                    close()
                    updateTodos();
                })
        } catch (err) {
            console.log(err);
        }
    };

    return (


        <Modal
            show={show}
            centered

        >
            {/* <label>Topic:</label>
            <select onChange={handleInputChange} value={inputState.category} name="topicid">
                <option></option>
                {
                    topics.map(topic => <option key={topic.id} value={topic.id}>{topic.name}</option>)
                }
            </select> */}

            <label>todo text:</label>
            <textarea name="text" onChange={handleInputChange} value={inputState.text}></textarea>

            <Container>
                <Button onClick={close}>Cancel</Button>
                <Button onClick={sendTodo}>Create</Button>


            </Container>

        </Modal>


    )

}