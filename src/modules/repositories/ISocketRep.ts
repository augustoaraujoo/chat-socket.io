import { IClientDTO } from '../dtos/IClientDTO'
interface ISocketRep {
    connectSocketIO(): Promise<any>;
}

export { ISocketRep }