const socket = io('http://localhost:3005');

const urLSearch = new URLSearchParams(window.location.search);
const email = urLSearch.get('email');
const matricula = urLSearch.get('matricula');

socket.emit("login", { email, matricula })


const emailColaboradorDIV = document.getElementById('emailColaboradorDIV');
const notaColaboradorDIV = document.getElementById('notaColaboradorDIV');
const reactColaboradorDIV = document.getElementById('reactColaboradorDIV');
socket.on('dados_colaborador', (data) => {
    emailColaboradorDIV.innerHTML = `${data.verify.email}`
    notaColaboradorDIV.innerHTML = `${data.verify.nota}`
    reactColaboradorDIV.innerHTML = `${data.verify.reacoes}`
})

socket.on("colaboradores", (data) => {
    const tabelaDados = document.getElementById('tabelaDados')
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
document.getElementById("logout").addEventListener('click', (event) => {
    window.location.href = 'index.html'
})