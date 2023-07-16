import { useContext, useState } from "react"
import todoServices from "../services/todoServices"
import { authContext } from "../contexts/authContext"
import { Button, Container, Modal } from "react-bootstrap"
import Form from 'react-bootstrap/Form'

export default function NewTodo({ topics, updateTodos, show, close, topicid }) {

    const { authenticatedUser } = useContext(authContext);
    const [inputState, setInputState] = useState({
        text: "",
        title: "",
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
            <Container style={
                {
                    padding: '1em',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '1em'

                }
            }>
                <Form.Group>
                    <Form.Control name="title" onChange={handleInputChange} value={inputState.title} placeholder="Todo Title"></Form.Control>
                </Form.Group>
                <Form.Group>
                    <Form.Control as="textarea" rows={10} name="text" onChange={handleInputChange} value={inputState.text} placeholder="Todo text"></Form.Control>
                </Form.Group>
                <Container style={
                    {
                        display: 'flex',
                        justifyContent: 'space-between'
                    }
                }>
                    <Button onClick={close}>Cancel</Button>
                    <Button onClick={sendTodo}>Create</Button>
                </Container>


            </Container>

        </Modal>


    )

}