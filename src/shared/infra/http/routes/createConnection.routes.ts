import { Router } from "express";

import { CreateConnectionController } from "modules/user/useCases/createMsg/CreateConnectionController";

const createConnectionRouter = Router();

const createConnectionController = new CreateConnectionController();

createConnectionRouter.post('/create', createConnectionController.handle);

export { createConnectionRouter }