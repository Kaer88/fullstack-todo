import { Router } from "express";
import todoController from "./todo-controller";
import authenticate from "../../middlewares/authenticate";
import authorize from "../../middlewares/authorize";

const todoRouter = Router();

todoRouter.get("/gettodo/:id", todoController.readSingleTodo)
todoRouter.post("/newtodo/:id", authenticate, authorize, todoController.createTodo)
todoRouter.get("/getall/:id", authenticate, authorize, todoController.readTodosId)
todoRouter.delete("/delete/:userid/:todoid", todoController.deleteTodo)
export default todoRouter