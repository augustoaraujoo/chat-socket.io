import { SocketRepository } from "modules/repositories/SocketRepository";
import { GetMsgRoomUseCase } from "./GetMsgRoomUseCase";

class GetMsgRoomController {

    async handle(room: string){
        
        const socketRepository = new SocketRepository();
        const getMsgRoomUseCase = new GetMsgRoomUseCase(socketRepository);
        return getMsgRoomUseCase.execute(room);
    }

}

export { GetMsgRoomController }