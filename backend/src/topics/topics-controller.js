import topicsService from "./topics-service"

export default {
    createTopic: async (req, res) => {
        return topicsService.createUserTopic(req);

    }

}