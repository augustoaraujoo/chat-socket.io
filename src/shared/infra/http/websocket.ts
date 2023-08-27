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

    socket.on("modal", (data) => {

        const verify = colaborador.find((c) => {
            return c.matricula == data.matricula_input
        })

        if (data.email === verify?.email || data.matricula_input === verify?.matricula) {
            const msg_err = 'você não pode enviar uma nota para si mesmo !'
            socket.emit('colaborador_err', { msg_err })
            return;

        } else {
            const colabEmail = data.email;
            const colabMatricula = data.matricula;

            socket.emit("colaboradorQmeEnviou", { colabEmail, colabMatricula })
        }


        if (verify) {
            verify.nota = Number(data.nota_input) + Number(verify.nota),
                verify.desc = verify.desc += data.mensagem_input,
                verify.reacoes = data.reacao_input
        }
        console.log(verify);
    })
})