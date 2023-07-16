export const createTodoQuery = `
    INSERT INTO todos(id, title, text, isdone, userid, topicid) 
    VALUES ($1, $2, $3, $4, $5, $6) RETURNING *
    `;


export const readTodoQuery = "SELECT * FROM todo WHERE id = $1";
export const readAllTodoQuery = "SELECT * FROM todo";
export const updateTodoQuery = `
    UPDATE todo
    SET id = $1,
        text = $2,
        done = $3
    WHERE id = $4
`;
export const deleteTodoQuery = "DELETE FROM todos WHERE id = $1 AND userid = $2";
