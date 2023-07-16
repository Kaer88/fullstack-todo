import { query } from "express";
import client from "../db/db";
import { createTodoQuery, deleteTodoQuery } from "./todo-queries";


const todoModel = {
    create: async (newTodoId, text, title, userid, topicid) => {
        return client.query(createTodoQuery, [newTodoId, title, text, false, userid, topicid])
    },
    read: async (id) => {
        return client.query(`
        SELECT date, todos.id, isdone, text, todos.userid, topics.name as topic_name, title FROM todos 
        JOIN topics ON(todos.topicid = topics.id)
        WHERE todos.userid = $1
        `, [id]);
    },

    readTodo: async (id) => {
        return client.query(`
            SELECT id, title, text, isdone, date FROM todos
            WHERE id = $1;
        `, [id]);
    },

    readAll: async () => {
        return client.query("SELECT * FROM todos")
    },

    readAllId: async (id) => {
        return client.query(`
        SELECT date, todos.id, isdone, text, todos.userid, topics.name as topic_name, topics.id as topic_id, title
        FROM todos 
        JOIN topics ON(todos.topicid = topics.id)
        WHERE todos.userid = $1
        ORDER BY todos.date DESC
        `, [id]);
    },

    update: async (id, title, text, done) => {
        return client.query(`
            UPDATE todos 
            SET title = $2, text = $3, isdone =$4
            WHERE id = $1
            RETURNING *
        `, [id, title, text, done]);
    },

    delete: async (todoId, userId) => {
        return client.query(deleteTodoQuery, [todoId, userId])
    },

    getTodosByTopic: async (topicId, userId) => {
        return client.query(`
            SELECT todos.*, topics.name FROM todos
            JOIN topics ON(topics.id = $2)
            WHERE todos.userid = $1
        `, [userId, topicId]);
    }

}

export default todoModel