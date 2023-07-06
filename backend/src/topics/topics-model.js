import client from "../db/db"

export default {
    createUserTopic : async (topicId, userid, name) => {
        return client.query("INSERT INTO topics(id, name, userid) VALUES ($1, $2, $3) RETURNING *", [topicId, name, userid]);

    }

}