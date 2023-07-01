import todoModel from "./todo-model"
import { nanoid } from 'nanoid'

const todoService = {

    createTodo: async (text, userid) => {
        const id = nanoid(8)
        return todoModel.create(id, text, userid)
    },

    readTodo: async (id) => {
        return todoModel.read(id)
    },

    readAll: () => {

        return todoModel.readAll()

    },

    readAllId: (id) => {

        return todoModel.readAllId(id)

    }

}

export default todoService