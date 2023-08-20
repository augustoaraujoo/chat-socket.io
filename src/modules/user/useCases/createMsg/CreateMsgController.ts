import { Response, Request } from 'express';
import { CreateMsgUseCase } from './CreateMsgUseCase';


class CreateMsgController {
    async handle(req: Request, res: Response): Promise<Response> {

        //const { msg } = req.body;
        // instanciar useCase e passar msg pra ele
        return res.json().status(201);

    }
}

export { CreateMsgController };