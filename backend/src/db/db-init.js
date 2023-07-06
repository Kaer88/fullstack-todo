import client from "./db";
import { createTodoTable, createTodoTopicsTable, createTopicsTable, createUsersTable } from "./db-init-queries";

export default async function initDb() {
    await client.query(createUsersTable)
    await client.query(createTopicsTable)
    await client.query(createTodoTable)
    await client.query(createTodoTopicsTable)

}
