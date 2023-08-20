import { Router } from "express";
import { msgRouter } from "./createMessage.routes";


const routes = Router();

routes.use("/", msgRouter)

export { routes }