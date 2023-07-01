import { query } from "express";
import client from "../db/db";
import { createTodoQuery } from "./todo-queries";


const todoModel = {
    create: async (id, text, userid) => {
        console.log(userid)
        return client.query(createTodoQuery, [id, text, false, userid])
    },
    read: async (id) => {
        return client.query("SELECT * FROM todo WHERE id=$1", [id])
    },

    readAll: async () => {
        return client.query("SELECT * FROM todo")
    },

    readAllId: async (id) => {
        return client.query("SELECT * FROM todo WHERE userid=$1", [id])
    },

    update: async (id, text, done) => {

    },
    delete: async (id) => {

    }
}

export default todoModel