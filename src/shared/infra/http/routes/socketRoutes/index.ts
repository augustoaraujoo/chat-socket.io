import express, { Router } from "express";
import path from 'path';

import { createConnectionRouter } from "./createConnection.routes";


const routes = Router();

const pathPublic = express.static(path.join(__dirname,'../../../../../modules/public'));


routes.use("/", pathPublic);

routes.use("/",createConnectionRouter)

export { routes }