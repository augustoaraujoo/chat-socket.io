import express from 'express';
import http from 'http';
import path from 'path';

import { Server } from 'socket.io';

const app = express();
const PORT = 3005;

app.use(express.static(path.join(__dirname, '..', "public")));

const serverHttp = http.createServer(app);

const io = new Server(serverHttp, {
    cors: {
        origin: "*",
        methods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
        
    }
});

export { serverHttp, io, PORT }