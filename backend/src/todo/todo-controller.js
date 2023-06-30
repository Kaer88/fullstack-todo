import todoService from "./todo-service"

const todoController = {
    createTodo: async (req, res, next) => {
        const { text } = req.body
        console.log("bejövő text", text)

        try {
            const newTodo = await todoService.createTodo(text);
            res.send(newTodo.rows)
        } catch (err) {
            next(err)
        }

    },

    readSingleTodo: async (req, res, next) => {
        const { id } = req.body;
        try {
            const todo = await todoService.readTodo(id);
            res.json(todo.rows);
        } catch(err) {
            console.log(err);
            next(err);
        }

    }
}

export default todoController;