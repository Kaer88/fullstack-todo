import todoModel from "./todo-model"
import { nanoid } from 'nanoid'

const todoService = {

    createTodo: async (req) => {
        const { text, topicid, title } = req.body;
        const { id } = req.params;
        const newTodoId = nanoid(8)
        return todoModel.create(newTodoId, text, title, id, topicid)
    },

    readTodo: async (id) => {
        return todoModel.read(id)
    },

    readAll: () => {

        return todoModel.readAll()

    },

    readAllId: (id) => {
        return todoModel.readAllId(id)
    },

    deleteTodo: async (req) => {

        const { todoid, userid } = req.params;
        console.log(todoid, userid)
        return todoModel.delete(todoid, userid)
    }

}

export default todoService