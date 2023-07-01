export const createTodoQuery = "INSERT INTO todo(id ,text, isdone, userid) VALUES ($1, $2, $3, $4) RETURNING *";


export const readTodoQuery = "SELECT * FROM todo WHERE id = $1";
export const readAllTodoQuery = "SELECT * FROM todo";
export const updateTodoQuery = `
    UPDATE todo
    SET id = $1,
        text = $2,
        done = $3
    WHERE id = $4
`;
export const deleteTodoQuery = "DELETE FROM todo WHERE id = $1";