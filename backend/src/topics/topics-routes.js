import { Router } from "express"
import topicsController from "./topics-controller"


const topicRouter = Router()

topicRouter.post("/newtopic/:userid", topicsController.createTopic);

export default topicRouter;