import { ISocketRep } from '../repositories/ISocketRep';
import { io } from '../../shared/infra/http/server'
import { Socket } from 'socket.io';

// remover isso daqui dps RoomUser,Messages
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


class SocketRepository implements ISocketRep {
    users: RoomUser[] = [];
    messages: Messages[] = []


   
    async connectSocketIO(): Promise<any> {
        io.on("connection", (socket) => {
            socket.on("select_room", async (data, callback) => {
                //socket.id é o id do usuario que esta conectado
                // qnd ele se conectar ja vai ser adicionado na lista de usuarios

                const userInRoom = this.users.find(user => user.username === data.username && user.room === data.room)

                if (userInRoom) {
                    userInRoom.socket_id = socket.id;
                } else {
                    this.users.push({
                        socket_id: socket.id,
                        username: data.username,
                        room: data.room
                    })
                }
                await socket.join(data.room);

                this.users.push({
                    room: data.room,
                    username: data.username,
                    socket_id: socket.id,

                })


                //retornando todas as msg dentro da sala
                const messagesRoom = await this.getMessagesRoom(data.room)


                const total = this.getMessagesRoom(data.room);
                const totalMsgInRoom = (await total).reduce((acc: number, i: any) => {
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
                this.messages.push(message);
                //emitindo a msg para todos users q estão dentro da room  
                io.to(data.room).emit("message", message);


            })



        })



    }
    async getMessagesRoom(room: string): Promise<any[]> {
        const messagesRoom = this.messages.filter(message => message.room === room);
        return messagesRoom
    }
    //emitir para todos usuerios conectados io.on
    // para 1 user socket.emit
    //escutar os eventos qeu foram emitidos usamos io/socket  .on
    //escutando o evento do client



}

export { SocketRepository }