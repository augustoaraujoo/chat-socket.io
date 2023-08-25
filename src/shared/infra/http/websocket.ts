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
        
        //verificar qm esta me enviando isto {email,matricula}=> url
        
        console.log(data);
        
        const verify = colaborador.find((c) => {
            return c.matricula == data.matricula_input
        })
        
        if (verify) {
            verify.nota = data.nota_input,
            verify.desc = data.mensagem_input
        }


    })
})