import { useContext, useState } from "react";
import { Button, Container, Modal } from "react-bootstrap";
import { authContext } from "../contexts/authContext";
import topicServices from "../services/topicServices";

export default function NewTopic({ updateTodos, show, close }) {
    const [inputState, setInputState] = useState("");
    const { authenticatedUser } = useContext(authContext);

    const handleInputChange = (e) => {
        setInputState(e.target.value);
    }

    const sendCategory = async () => {
        if (inputState === "") return;
        try {
            await topicServices.addTopic(authenticatedUser, inputState);
            updateTodos()
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <Modal
            show={show}
            centered>
            <label>Topic name:</label>
            <input type="text" onChange={handleInputChange} value={inputState}></input>
            <Container>
                <Button onClick={close} className="">Cancel</Button>
                <Button onClick={sendCategory} >Create topic</Button>
            </Container>

        </Modal>
    )

}