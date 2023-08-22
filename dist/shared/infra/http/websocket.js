"use strict";
/*  ONDE ESTE ARQUIVO ESTÁ SENDO INSTANCIADO VAI PASSAR DEPOIS A SER CHAMADO PELAS ROTAS->CONTROLLER->USECASE->REPOSITORY*/
Object.defineProperty(exports, "__esModule", { value: true });
//caso uso conexão na aplicação com websocket
var server_1 = require("./server");
var users = [];
var messages = [];
//emitir para todos usuerios conectados io.on
// para 1 user socket.emit
//escutar os eventos qeu foram emitidos usamos io/socket  .on
//escutando o evento do client
server_1.io.on("connection", function (socket) {
    socket.on("select_room", function (data, callback) {
        //socket.id é o id do usuario que esta conectado
        // qnd ele se conectar ja vai ser adicionado na lista de usuarios
        var userInRoom = users.find(function (user) { return user.username === data.username && user.room === data.room; });
        if (userInRoom) {
            userInRoom.socket_id = socket.id;
        }
        else {
            users.push({
                socket_id: socket.id,
                username: data.username,
                room: data.room
            });
        }
        socket.join(data.room);
        users.push({
            room: data.room,
            username: data.username,
            socket_id: socket.id
        });
        //retornando todas as msg dentro da sala
        var messagesRoom = getMessagesRoom(data.room);
        callback(messagesRoom);
        console.log(users);
    });
    socket.on("message", function (data) {
        var message = {
            room: data.room,
            username: data.username,
            message: data.message,
            createdAt: new Date()
        };
        messages.push(message);
        //emitindo a msg para todos users q estão dentro da room  
        server_1.io.to(data.room).emit("message", message);
    });
});
function getMessagesRoom(room) {
    var messagesRoom = messages.filter(function (message) { return message.room === room; });
    return messagesRoom;
}
//# sourceMappingURL=websocket.js.map