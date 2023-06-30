import { Router } from "express";
import todoService from "./todo-service";
import todoController from "./todo-controller";

const todoRouter = Router();

todoRouter.get("/gettodo", todoController.readSingleTodo)
todoRouter.post("/newtodo", todoController.createTodo)

export default todoRouter