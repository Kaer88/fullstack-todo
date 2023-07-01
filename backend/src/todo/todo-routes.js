import { Router } from "express";
import todoService from "./todo-service";
import todoController from "./todo-controller";
import authenticate from "../../middlewares/authenticate";

const todoRouter = Router();

todoRouter.get("/gettodo/:id", todoController.readSingleTodo)
todoRouter.post("/newtodo/:id", authenticate, todoController.createTodo)
todoRouter.get("/getall/:id", authenticate, todoController.readTodosId)
export default todoRouter