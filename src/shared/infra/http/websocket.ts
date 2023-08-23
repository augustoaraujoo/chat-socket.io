
/*  ONDE ESTE ARQUIVO ESTÁ SENDO INSTANCIADO VAI PASSAR DEPOIS A SER CHAMADO PELAS ROTAS->CONTROLLER->USECASE->REPOSITORY*/

//caso uso conexão na aplicação com websocket
import { io } from './server';

interface RoomUser {
    socket_id: string;
    username: string;
    room: string;

}

interface Messages {
    room: string;
    message: string;
    createdAt: Date;
    username: string;
}

const users: RoomUser[] = [];
const messages: Messages[] = []
//emitir para todos usuerios conectados io.on
// para 1 user socket.emit
//escutar os eventos qeu foram emitidos usamos io/socket  .on
//escutando o evento do client
io.on("connection", (socket) => {
    socket.on("select_room", (data, callback) => {
        //socket.id é o id do usuario que esta conectado
        // qnd ele se conectar ja vai ser adicionado na lista de usuarios

        const userInRoom = users.find(user => user.username === data.username && user.room === data.room)

        if (userInRoom) {
            userInRoom.socket_id = socket.id;
        } else {
            users.push({
                socket_id: socket.id,
                username: data.username,
                room: data.room
            })
        }
        socket.join(data.room);

        users.push({
            room: data.room,
            username: data.username,
            socket_id: socket.id,

        })


        //retornando todas as msg dentro da sala
        const messagesRoom = getMessagesRoom(data.room)


        const total = getMessagesRoom(data.room);
        const totalMsgInRoom = total.reduce((acc, i) => {
            return acc + 1
        }, 0);

        io.emit('total_msg', { totalMsgInRoom });
        // esse dado precisa ser lido pelo client ->

        callback(messagesRoom)

    })



    socket.on("message", data => {
        const message: Messages = {
            room: data.room,
            username: data.username,
            message: data.message,
            createdAt: new Date()
        }
        messages.push(message);
        //emitindo a msg para todos users q estão dentro da room  
        io.to(data.room).emit("message", message);


    })



})

function getMessagesRoom(room: string) {



    const messagesRoom = messages.filter(message => message.room === room);



    return messagesRoom
}
