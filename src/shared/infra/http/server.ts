import express from 'express';
import http from 'http';
import path from 'path';

import { Server } from 'socket.io';
import { createConnectionRouter } from './routes/createConnection.routes';

const app = express();
const PORT = 3005;
const pathPublic = express.static(path.join(__dirname, '..', "public"));


app.use(pathPublic);
//app.use(createConnectionRouter)
const serverHttp = http.createServer(app);

const io = new Server(serverHttp, {
    cors: {
        origin: "*",
        methods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
        
    }
});

export { serverHttp, io, PORT }