import { query } from "express";
import client from "../db/db";
import { createTodoQuery } from "./todo-queries";


const todoModel = {
    create: async (id, text, userid) => {
        return client.query(createTodoQuery, [id, text, false, userid])
    },
    read: async (id) => {
        return client.query(`
        SELECT date, todos.id, isdone, text, todos.userid, topics.name as topic_name FROM todos 
        JOIN topics ON(todos.topicid = topics.id)
        WHERE todos.userid = '1rSBXtdC'
        `, [id])
    },

    readAll: async () => {
        return client.query("SELECT * FROM todos")
    },

    readAllId: async (id) => {
        return client.query(`
        SELECT date, todos.id, isdone, text, todos.userid, topics.name as topic_name, topics.id as topic_id
        FROM todos 
        JOIN topics ON(todos.topicid = topics.id)
        WHERE todos.userid = $1
        ORDER BY todos.date DESC
        `, [id])
    },

    update: async (id, text, done) => {

    },
    delete: async (id) => {

    }
}

export default todoModel