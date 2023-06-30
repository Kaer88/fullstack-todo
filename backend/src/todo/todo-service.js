import todoModel from "./todo-model"
import { nanoid } from 'nanoid'

const todoService = {

    createTodo: async (text) => {
        const id = nanoid(8)
        return todoModel.create(id, text)
    },

    readTodo: async (id) => {
        return todoModel.read(id)
    },

    readAll: () => {

        return todoModel.readAll()

    }

}

export default todoService