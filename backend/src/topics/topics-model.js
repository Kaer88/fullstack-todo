import client from "../db/db"
import nanoid from 'nanoid'

export default {
    createUserTopic : async (userid, name) => {
        const topicId = nanoid(10);
        return client.query("INSERT INTO topics(id, name, userid) VALUES ($1, $2, $3)", [topicId, name, userid]);

    }

}