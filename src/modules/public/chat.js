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
    const descColaboradorDIV = document.getElementById('descColaboradorDIV');
    const nomeColaboradorDIV = document.getElementById('nomeColaboradorDIV');
    const fotoURLColaboradorDIV = document.getElementById('fotoURLColaboradorDIV');

    if (typeof data.verify.reacoes === 'undefined' && typeof data.verify.desc === 'undefined') {
        reactColaboradorDIV.innerHTML = `Você não recebeu uma reação ainda!`
        descColaboradorDIV.innerHTML = `Você não recebeu uma descrições ainda!`

    } else {
        reactColaboradorDIV.innerHTML = `reações: ${data.verify.reacoes}`
        //  
        descColaboradorDIV.innerHTML = `descrições recebidas: ${data.verify.desc}`.replace("undefined", "")


    }
    emailColaboradorDIV.innerHTML = `seu email: ${data.verify.email}`
    notaColaboradorDIV.innerHTML = `total de notas: ${data.verify.nota}`
    nomeColaboradorDIV.innerHTML = `${data.verify.nome}`

    const img = document.createElement("img");
    img.style.width = '60px'
    img.src = `${data.verify.foto_url}`

    fotoURLColaboradorDIV.appendChild(img)
});
socket.on("colaboradorQmeEnviou", (data) => {

    console.log(`você recebeu uma avaliação de ${data.colabEmail}`);
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

        for (let i = 0; i < 3 && i < notaDecrescente.length; i++) {
            const pessoa = notaDecrescente[i];
            //console.log(pessoa.email);

            // const listItem = document.createElement('li');
            // listItem.innerHTML = `<strong>${pessoa.nome}:</strong> Nota: ${pessoa.nota}`;
            // listaUl.appendChild(listItem);
        }

        emailColaborador.innerHTML = obj.email;
        notaColaborador.innerHTML = obj.nota;

    }
})


/* SCRIPT PARA O MODAL*/

//inputs radio
let exampleRadios1 = document.getElementById('exampleRadios1')
let exampleRadios2 = document.getElementById('exampleRadios2')
let exampleRadios3 = document.getElementById('exampleRadios3')
let exampleRadios4 = document.getElementById('exampleRadios4')


//emitir um evento / push data({ com as infos passadas pelo client })=> para um determinado colaborador por MATRICULA ; VERIFICAR SE MATRICULA EXISTE
document.getElementById('enviarNota').addEventListener('click', (event) => {


    let matricula_input = document.getElementById('matricula_input').value.trim();

    let nota_input = document.getElementById('nota_input').value.trim()

    let mensagem_input = document.getElementById('mensagem_input').value.trim()

    const options = document.getElementsByName("exampleRadios");

    for (let i = 0; i < options.length; i++) {
        if (options[i].checked) {
            const reacao_input = options[i].value;

            socket.emit("modal", { matricula_input, nota_input, mensagem_input, reacao_input, email, matricula })
            alert('avaliação enviada!')
            break;
        }
    }

})

socket.on("colaborador_err", (data) => {
    alert(data.msg_err)
})



document.getElementById("logout").addEventListener('click', (event) => {
    window.location.href = 'index.html'
})