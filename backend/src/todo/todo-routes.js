import { Router } from "express";
import todoService from "./todo-service";
import todoController from "./todo-controller";

const todoRouter = Router();

todoRouter.post("/newtodo", todoController.createTodo)

export default todoRouter