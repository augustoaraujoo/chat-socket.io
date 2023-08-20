//caso uso conexão na aplicação com websocket
import { io } from './server';


//emitir para todos usuerios conectados io.on
// para 1 user socket.emit
//escutar os eventos qeu foram emitidos usamos io/socket  .on
//escutando o evento do client
io.on("connection", (socket) => {
    socket.on("select_room", data => {
        console.log(data);
    })
})

