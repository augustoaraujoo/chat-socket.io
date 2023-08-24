import { colaboradores } from './colaboaresBdLocal';
const colaborador = colaboradores;
import { io } from './server';

//'lucas.fernandes@cliente.com
io.on("connection", (socket) => {
    //matricula e email
    socket.on("login", (data) => {
        const verify = colaborador.find((c) => {
            return c.email == data.email
                && c.matricula == data.matricula

        })
        if (verify) {
            verify.socket_id = socket.id;
        }
        socket.emit("dados_colaborador", { verify });
    })
    socket.emit("colaboradores",{colaboradores})
})