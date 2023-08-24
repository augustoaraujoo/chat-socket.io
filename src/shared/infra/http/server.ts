import express, { Request, Response } from 'express';
import http from 'http';
import path from 'path';

import { Server } from 'socket.io';

const app = express();
const PORT = 3005;

const pathPublic = express.static(path.join(__dirname, '../../../modules/public'));


app.use(express.json());
app.use(pathPublic)
//app.use(routes)

const serverHttp = http.createServer(app);

const io = new Server(serverHttp, {
    cors: {
        origin: "*",
        methods: ["GET", "POST", "PUT", "DELETE", "PATCH"],

    }
});



export { serverHttp, io, PORT }