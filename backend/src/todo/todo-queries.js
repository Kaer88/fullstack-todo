export const createTodoQuery = `
    INSERT INTO todos(id ,text, done) VALUES ($1, $2, $3)
`

export const readTodoQuery = "SELECT * FROM todos WHERE id = $1";
export const readAllTodoQuery = "SELECT * FROM todos";
export const updateTodoQuery = `
    UPDATE todo
    SET id = $1,
        text = $2,
        done = $3
    WHERE id = $4
`;
export const deleteTodoQuery = "DELETE FROM todo WHERE id = $1";