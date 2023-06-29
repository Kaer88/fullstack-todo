import express from 'express';
import cors from 'cors';
import initDb from './db/db-init';

const app = express()

app.use(express.json())
app.use(cors())
initDb()
app.get((req, res) => {
    res.send("Hello")
})

export default app