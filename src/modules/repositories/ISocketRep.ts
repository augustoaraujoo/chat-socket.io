import { Socket } from "socket.io";

//import { IClientDTO } from '../dtos/IClientDTO'
interface ISocketRep {
    connectSocketIO(): Promise<any>;
    getMessagesRoom(room:string):Promise<any[]>
}

export { ISocketRep }