import { Router } from "express";
import todoService from "./todo-service";
import todoController from "./todo-controller";

const todoRouter = Router();

todoRouter.get("/gettodo/:id", todoController.readSingleTodo)
todoRouter.post("/newtodo", todoController.createTodo)
todoRouter.get("/getall", todoController.readAllTodos)
export default todoRouter