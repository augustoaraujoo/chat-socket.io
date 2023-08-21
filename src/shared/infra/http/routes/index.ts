import { Router } from "express";
import { createConnectionRouter } from "./createConnection.routes";


const routes = Router();

routes.use("/", createConnectionRouter)

export { routes }