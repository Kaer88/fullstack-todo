export const createUsersTable = `
    CREATE TABLE IF NOT EXISTS users(
        id VARCHAR(24) PRIMARY KEY,
        email VARCHAR(32) UNIQUE NOT NULL, 
        password VARCHAR(32) NOT NULL,
        created TIMESTAMP DEFAULT CURRENT_TIMESTAMP


    )

`
export const createTodoTable = `
CREATE TABLE IF NOT EXISTS todo(
    id VARCHAR(24) PRIMARY KEY,
    text VARCHAR(32) NOT NULL, 
    isdone VARCHAR(32) NOT NULL,
    date TIMESTAMP DEFAULT CURRENT_TIMESTAMP


)
`