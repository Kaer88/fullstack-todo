import topicsService from "../topics/topics-service";
import todoService from "./todo-service"

const todoController = {
    createTodo: async (req, res, next) => {
        const { text } = req.body;
        const { id } = req.params;
        try {
            const newTodo = await todoService.createTodo(text, id);
            res.send(newTodo.rows)
        } catch (err) {
            next(err)
        }

    },

    readSingleTodo: async (req, res, next) => {
        const { id } = req.params;
        console.log(id)
        try {
            const todo = await todoService.readTodo(id);
            res.json(todo.rows);
        } catch (err) {
            console.log(err);
            next(err);
        }

    },

    readAllTodos: async (req, res, next) => {
        try {
            const todos = await todoService.readAll()
            res.json(todos.rows)
        } catch (err) {
            console.log(err)
        }

    },

    readTodosId: async (req, res, next) => {
        try {
            const { id } = req.params
            const todos = await todoService.readAllId(id)
            const topics = await topicsService.getUserTopics(id)
            const responseObject = {
                userTodos: todos.rows,
                topics: topics.rows
            }
            res.json(responseObject)
        } catch (err) {
            console.log(err)
            res.send("gebasz")
        }

    }
}

export default todoController;