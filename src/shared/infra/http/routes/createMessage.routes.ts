import { Router } from "express";

import { CreateMsgController } from "modules/user/useCases/createMsg/CreateMsgController";

const msgRouter = Router();

const createMessageController = new CreateMsgController();

msgRouter.post('/create', createMessageController.handle);

export { msgRouter }