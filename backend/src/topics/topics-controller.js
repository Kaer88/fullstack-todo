import topicsService from "./topics-service"

export default {
    createTopic: async (req, res, next) => {
        try {
            const result = await topicsService.createUserTopic(req);
            res.json(result.rows);
            
        } catch (err) {
            console.log("topic create error");
            next(err);
        }


    }

}