import { IClientDTO } from 'modules/dtos/IClientDTO';
import { ISocketRep } from '../repositories/ISocketRep';
import { io } from '../../shared/infra/http/server'



interface RoomUser {
    socket_id: string;
    username: string;
    room: string;
}

class SocketRepository implements ISocketRep {
    users: RoomUser[] = [];
    async connectSocketIO(): Promise<any> {
        
        io.on("connection", (socket) => {
            socket.on("select_room", (data) => {
                //socket.id é o id do usuario que esta conectado
                // qnd ele se conectar ja vai ser adicionado na lista de usuarios

                const userInRoom = this.users.find(user => user.username === data.username && user.room === data.room);

                if (userInRoom) {
                    userInRoom.socket_id = socket.id;
                } else {
                    this.users.push({
                        socket_id: socket.id,
                        username: data.username,
                        room: data.room
                    })
                }
                socket.join(data.room);

                this.users.push({
                    socket_id: socket.id,
                    username: data.username,
                    room: data.room
                })

                console.log(this.users);
            })
        })
    }



}

export { SocketRepository }