"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//caso uso conexão na aplicação com websocket
var server_1 = require("./server");
//emitir para todos usuerios conectados io.on
// para 1 user socket.emit
//escutar os eventos qeu foram emitidos usamos io/socket  .on
//escutando o evento do client
server_1.io.on("connection", function (socket) {
    socket.on("select_room", function (data) {
        console.log(data);
    });
});
//# sourceMappingURL=websocket.js.map