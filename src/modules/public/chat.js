const socket = io('http://localhost:3005');

const urLSearch = new URLSearchParams(window.location.search);
const email = urLSearch.get('email');
const matricula = urLSearch.get('matricula');

socket.emit("login", { email, matricula })


document.getElementById("logout").addEventListener('click', (event) => {
    window.location.href = 'index.html'
})