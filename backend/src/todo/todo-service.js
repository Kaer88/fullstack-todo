import todoModel from "./todo-model"
import { nanoid } from 'nanoid'

const todoService = {

    createTodo: async (text) => {
        const id = nanoid(8)
        return todoModel.create(id, text)
    }

}

export default todoService