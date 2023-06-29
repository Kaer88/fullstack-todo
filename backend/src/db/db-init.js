import client from "./db";
import { createTodoTable, createUsersTable } from "./db-init-queries";

export default async function initDb() {
    await client.query(createUsersTable)
    await client.query(createTodoTable)

}
