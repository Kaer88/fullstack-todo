export const createUsersTable = `
    CREATE TABLE IF NOT EXISTS users(
        id VARCHAR(24) PRIMARY KEY,
        email VARCHAR(32) UNIQUE NOT NULL, 
        password VARCHAR(64) NOT NULL,
        created TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )

`

export const createTopicsTable = `
CREATE TABLE IF NOT EXISTS topics (
    id VARCHAR(32) UNIQUE NOT NULL,
    name VARCHAR(64) NOT NULL,
    userid VARCHAR(24) NOT NULL,
    FOREIGN KEY (userid) REFERENCES users(id)
)
`

export const createTodoTable = `
CREATE TABLE IF NOT EXISTS todos(
    id VARCHAR(24) PRIMARY KEY,
    title VARCHAR(200) NOT NULL, 
    text TEXT NOT NULL, 
    isdone BOOLEAN NOT NULL,
    date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    userid VARCHAR(24) NOT NULL,
    topicid VARCHAR(32) NOT NULL,
    FOREIGN KEY(userid) REFERENCES users(id),
    FOREIGN KEY(topicid) REFERENCES topics(id)

)
`

export const createTodoTopicsTable = `
CREATE TABLE IF NOT EXISTS todo_topic(
    todoid VARCHAR(32),
    topicid VARCHAR(32), 
    FOREIGN KEY (todoid) REFERENCES todos(id),
    FOREIGN KEY (topicid) REFERENCES topics(id)

)
`

