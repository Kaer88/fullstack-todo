import client from "../db/db"

export default {
    createUserTopic : async (topicId, userid, name) => {
        return client.query("INSERT INTO topics(id, name, userid) VALUES ($1, $2, $3) RETURNING *", [topicId, name, userid]);

    },

    getUserTopics: async (userid) => {
        return client.query("SELECT * FROM topics WHERE userid = $1", [userid])
    },

    getTopicContent: async(topicId) => {
        console.log(topicId)
        return client.query("SELECT * FROM todos WHERE topicid = $1", [topicId])
    }

}