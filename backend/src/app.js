import express from 'express';
import cors from 'cors';
import initDb from './db/db-init';
import todoRouter from './todo/todo-routes';

const app = express()

app.use(express.json())
app.use(cors())
initDb()
app.use("/todo", todoRouter)

app.get("/", (req, res) => {
    res.send("Hello")
})

export default app