import client from "../db/db"


const userModel = {

    createUser: async (id, email, password) => {
        
        return client.query("INSERT INTO users(id, email, password) VALUES ($1,$2,$3) RETURNING id, email", [id, email, password])
    },


    read: async (email) => {
        return client.query("SELECT * FROM users WHERE email=$1", [email])
    }

}

export default userModel