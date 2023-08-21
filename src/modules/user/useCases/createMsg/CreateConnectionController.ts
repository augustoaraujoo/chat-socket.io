import { Response, Request } from 'express';
import { CreateConnectionUseCase } from './CreateConnectionUseCase';
import { SocketRepository } from 'modules/repositories/SocketRepository';

//connect
class CreateConnectionController {
    async handle(req: Request, res: Response) {
        const socketRepository = new SocketRepository();
        const createConnectionUseCase = new CreateConnectionUseCase(socketRepository);
        return createConnectionUseCase.execute();
    }

}

export { CreateConnectionController };