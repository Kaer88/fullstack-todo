import topicsService from "../topics/topics-service";
import todoService from "./todo-service"

const todoController = {
    createTodo: async (req, res, next) => {
        try {
            const newTodo = await todoService.createTodo(req);
            res.json(newTodo.rows);
        } catch (err) {
            next(err);
        }

    },

    readSingleTodo: async (req, res, next) => {
        const { id } = req.params;
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
            const todos = await todoService.readAll();
            res.json(todos.rows);
        } catch (err) {
            console.log(err);
        }

    },

    readTodosId: async (req, res, next) => {
        try {
            const { id } = req.params;
            const todos = await todoService.readAllId(id);
            const topics = await topicsService.getUserTopics(id);
            const responseObject = {
                userTodos: todos.rows,
                topics: topics.rows
            };
            res.json(responseObject);
        } catch (err) {
            next(err)
           
        }

    },

    deleteTodo: async (req, res, next) => {
        try {
            const deleteQueryResponse = await todoService.deleteTodo(req);
            res.json({ msg: "success", deleteQueryResponse });
        } catch (err) {
            next(err)
        }
    },

    updateTodo: async (req, res, next) => {
        try{
             const updateResult = await todoService.updateTodo(req);
             res.json(updateResult.rows[0]);
        } catch(err) {
            next(err);
        }
    }


}

export default todoController;