import express, { Request, Response } from 'express';
import http from 'http';
import path from 'path';

import { Server } from 'socket.io';
import { createConnectionRouter } from './routes/createConnection.routes';

const app = express();
const PORT = 3005;
const pathPublic = express.static(path.join(__dirname, '..', "public"));


app.use(pathPublic);
app.use(express.json());
//app.use(createConnectionRouter)
app.get('/h', (req: Request, res: Response) => {
    res.json('serverrrrr expresshttp')
})
const serverHttp = http.createServer(app);

const io = new Server(serverHttp, {
    cors: {
        origin: "*",
        methods: ["GET", "POST", "PUT", "DELETE", "PATCH"],

    }
});

app.get('/home', (req: Request, res: Response) => {
    res.json('serverrrrr expresshttp')
})


export { serverHttp, io, PORT }