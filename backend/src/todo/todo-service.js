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
        return todoModel.delete(todoid, userid);
    },

    updateTodo: async (req) => {
        const { userId, todoId } = req.params;
        const updateData = req.body;
        const dbTodo = await todoModel.readTodo(todoId);
        const newData = {
            title: updateData.title || dbTodo.rows[0].title,
            text: updateData.text || dbTodo.rows[0].text,
            isdone: updateData.isDone ? true : false
        };
        return todoModel.update(todoId, newData.title, newData.text, newData.isdone);


    }

};

export default todoService;