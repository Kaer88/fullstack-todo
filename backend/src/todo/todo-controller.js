import todoService from "./todo-service"

const todoController = {
    createTodo: async (req, res, next) => {
        const { text } = req.body

        try {
            const newTodo = await todoService.createTodo(text);
            res.send(newTodo.rows)
        } catch (err) {
            next(err)
        }

    },

    readSingleTodo: async (req, res, next) => {
        const { id } = req.query;
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
        } catch(err) {
            console.log(err)
        }

    }
}

export default todoController;