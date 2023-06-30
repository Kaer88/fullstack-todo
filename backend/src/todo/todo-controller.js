import todoService from "./todo-service"

const todoController = {
    createTodo: async (req, res, next) => {
        const { text } = req.body
        console.log("bejövő text", text)

        try {
            const newTodo = await todoService.createTodo(text);
            res.send(newTodo.rows)
        } catch(err) {
            next(err)
        }

    }
}

export default todoController;