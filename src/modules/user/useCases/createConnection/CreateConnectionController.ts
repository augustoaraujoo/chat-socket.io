import { Socket } from 'socket.io';
import { CreateConnectionUseCase } from './CreateConnectionUseCase';
import { SocketRepository } from '../../../../modules/repositories/SocketRepository';

class CreateConnectionController {
    async handle() {
        const socketRepository = new SocketRepository();
        const createConnectionUseCase = new CreateConnectionUseCase(socketRepository);
        return createConnectionUseCase.execute();
    }

}

export { CreateConnectionController };