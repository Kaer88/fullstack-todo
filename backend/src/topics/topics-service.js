import topicsModel from "./topics-model";

export default {

    createUserTopic: async (req) => {
        const { userid } = req.params;
        const { name } = req.body;
        return topicsModel.createUserTopic(userid, name)


    }

}