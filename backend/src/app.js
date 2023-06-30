import express from 'express';
import cors from 'cors';
import todoRouter from './todo/todo-routes';
import authController from '../auth/auth-controller';
import authRouter from '../auth/auth-routes';

const app = express()

app.use(express.json())
app.use(cors())

app.use("/todo", todoRouter)
app.use("/auth", authRouter)


export default app