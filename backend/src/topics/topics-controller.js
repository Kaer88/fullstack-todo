import topicsService from "./topics-service"

export default {
    createTopic: async (req, res, next) => {
        try {
            console.log(res)
            const result = await topicsService.createUserTopic(req);
            res.json(result.rows);
        } catch (err) {
            console.log("topic create error");
            next(err);
        }


    },

    getUserTopics: async (req, res, next) => {
        try {
            const topics = await topicsService.getUserTopics(req);
            res.json(topics.rows);
        } catch (err) {
            console.log(err);
            next(err)
        }
    }
}