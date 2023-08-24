const socket = io('http://localhost:3005');

const urLSearch = new URLSearchParams(window.location.search);
const email = urLSearch.get('email');
const matricula = urLSearch.get('matricula');

socket.emit("login", { email, matricula })


const emailColaboradorDIV = document.getElementById('emailColaboradorDIV');
const notaColaboradorDIV = document.getElementById('notaColaboradorDIV');
const reactColaboradorDIV = document.getElementById('reactColaboradorDIV');
socket.on('dados_colaborador', (data) => {
    emailColaboradorDIV.innerHTML=`${data.verify.email}`
    notaColaboradorDIV.innerHTML=`${data.verify.nota}`
    reactColaboradorDIV.innerHTML=`${data.verify.reacoes}`
    console.log(data);
})

const totalColaboradores= document.getElementById('totalColaboradores')
socket.on("colaboradores", (data)=>{
  
})
document.getElementById("logout").addEventListener('click', (event) => {
    window.location.href = 'index.html'
})