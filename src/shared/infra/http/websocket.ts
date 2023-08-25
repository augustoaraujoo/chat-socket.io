import { colaboradores } from './colaboaresBdLocal';
const colaborador = colaboradores;
import { io } from './server';




io.on("connection", (socket) => {
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

    socket.emit("colaboradores", { colaboradores })
})