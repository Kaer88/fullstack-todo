import topicsModel from "./topics-model";
import { nanoid } from 'nanoid'

export default {

    createUserTopic: async (req) => {
        const { userid } = req.params;
        const { name } = req.body;
        const topicId = nanoid(10);
        if (!userid || !name) throw new Error("missing data")
        return topicsModel.createUserTopic(topicId, userid, name)
    },

    getUserTopics: async (id) => {
        return topicsModel.getUserTopics(id);
    },

    getTopicContent: async (req) => {
        const { topicId } = req.params;
        return topicsModel.getTopicContent(topicId)
    }

}