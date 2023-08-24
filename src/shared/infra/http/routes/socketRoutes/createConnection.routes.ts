import { Router } from "express";
import { CreateConnectionController } from "../../../../../modules/user/useCases/createConnection/CreateConnectionController";

;

const createConnectionRouter = Router();

const createConnectionController = new CreateConnectionController();

createConnectionRouter.use(createConnectionController.handle);
//select_room=elixir&username=dsadas
//message
export { createConnectionRouter }