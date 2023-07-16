import { Router } from "express"
import topicsController from "./topics-controller"
import authenticate from "../../middlewares/authenticate";
import authorize from "../../middlewares/authorize";


const topicRouter = Router()

topicRouter.post("/newtopic/:userid", authenticate, authorize, topicsController.createTopic);
topicRouter.get('/:userId/:topicId', authenticate, authorize, topicsController.getTopicContent);
export default topicRouter;