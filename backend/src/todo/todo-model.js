import client from "../db/db";
import { createTodoQuery } from "./todo-queries";


const todoModel = {
    create: async (id, text) => {

        return client.query(createTodoQuery, [id, text, false])
    },
    read: async (id) => {
        return client.query("SELECT * FROM todo WHERE id=$1", [id])
    },

    readAll: async () => {
        return client.query("SELECT * FROM todo")
    },

    update: async (id, text, done) => {

    },
    delete: async (id) => {

    }
}

export default todoModel