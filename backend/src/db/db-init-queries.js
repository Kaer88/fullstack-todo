export const createUsersTable = `
    CREATE TABLE IF NOT EXISTS users(
        id VARCHAR(24) PRIMARY KEY,
        email VARCHAR(32) UNIQUE NOT NULL, 
        password VARCHAR(64) NOT NULL,
        created TIMESTAMP DEFAULT CURRENT_TIMESTAMP


    )

`
export const createTodoTable = `
CREATE TABLE IF NOT EXISTS todo(
    id VARCHAR(24) PRIMARY KEY,
    text TEXT NOT NULL, 
    isdone BOOLEAN NOT NULL,
    date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    userid VARCHAR(24),
    FOREIGN KEY(userid) REFERENCES users(id)


)
`