import { SocketRepository } from 'modules/repositories/SocketRepository';
class GetMsgRoomUseCase {
    constructor(private socketRepository: SocketRepository) {}

    async execute(room: string) {
        const client = await this.socketRepository.getMessagesRoom(room);
        return client;
    }
}

export { GetMsgRoomUseCase }