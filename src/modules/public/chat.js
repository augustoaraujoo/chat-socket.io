//http://127.0.0.1:5500/src/modules/public/chat.html?email=lucas.fernandes%40cliente.com&matricula=3748
const socket = io('http://localhost:3005');
const urLSearch = new URLSearchParams(window.location.search);
const email = urLSearch.get('email');
const matricula = urLSearch.get('matricula');

socket.emit("login", { email, matricula })


socket.on('dados_colaborador', (data) => {
    const emailColaboradorDIV = document.getElementById('emailColaboradorDIV');
    const notaColaboradorDIV = document.getElementById('notaColaboradorDIV');
    const reactColaboradorDIV = document.getElementById('reactColaboradorDIV');
    emailColaboradorDIV.innerHTML = `${data.verify.email}`
    notaColaboradorDIV.innerHTML = `${data.verify.nota}`
    reactColaboradorDIV.innerHTML = `${data.verify.reacoes}`
})

socket.on("colaboradores", (data) => {


    const notaDecrescente = data.colaboradores.sort(function (a, b) {
        return b.nota - a.nota
    });


    const tabelaDados = document.getElementById('tabelaDados');
    for (const obj of data.colaboradores) {
        const newRow = tabelaDados.insertRow();
        const emailColaborador = newRow.insertCell(0);
        let notaColaborador = newRow.insertCell(1);

        emailColaborador.innerHTML = obj.email;
        notaColaborador.innerHTML = obj.nota;

    }
    //pra cada colocaborador coloca-se um input e digita a nota/desc
    // usa o socket.id ou matricula para ter certeza
})


/* SCRIPT PARA O MODAL*/

let matricula_input = document.getElementById('matricula_input');
//inputs radio
let exampleRadios1 = document.getElementById('exampleRadios1')
let exampleRadios2 = document.getElementById('exampleRadios2')
let exampleRadios3 = document.getElementById('exampleRadios3')
let exampleRadios4 = document.getElementById('exampleRadios4')

let nota_input = document.getElementById('nota_input');

let mensagem_input = document.getElementById('mensagem_input');


//emitir um evento / push data({ com as infos passadas pelo client })=> para um determinado colaborador por MATRICULA ; VERIFICAR SE MATRICULA EXISTE
document.getElementById('enviarNota').addEventListener('click', (event) => {
    matricula_input=6870, nota_input=321, mensagem_input='oi';
    socket.emit("modal", { matricula_input, nota_input, mensagem_input })
})


document.getElementById("logout").addEventListener('click', (event) => {
    window.location.href = 'index.html'
})