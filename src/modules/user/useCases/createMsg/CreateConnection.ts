import { SocketRepository } from '../../../repositories/SocketRepository';
class CreateConnectionUseCase {

    constructor(private socketRepository: SocketRepository) { }

    async execute(username: string, room: string): Promise<any> {
        const client = await this.socketRepository.connectSocketIO();

        return client;

    }

}

export { CreateConnectionUseCase };