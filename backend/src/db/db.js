import { Client } from "pg"
import { DB_HOST, DB_NAME, DB_PASSWORD, DB_USER, DB_PORT } from "../constants/constants";


const client = new Client({
    host: DB_HOST,
    port: 3001,
    database: DB_NAME,
    user: DB_USER,
    password: DB_PASSWORD,
});

export default client;