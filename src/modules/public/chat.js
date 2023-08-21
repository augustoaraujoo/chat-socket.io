const socket = io('http://localhost:3005');

const urLSearch = new URLSearchParams(window.location.search);
const username = urLSearch.get('username');
const room = urLSearch.get('select_room');

socket.emit('select_room', { username, room }, (messages) => {
    messages.forEach((message) => createMessage(message))
});

document.getElementById('message_input').addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
        const message = event.target.value;
        const data = {
            message,
            username,
            room
        }
        socket.emit("message", data);
        event.target.value = ''
    }
})


const userDiv = document.getElementById('username');
userDiv.innerHTML = `Olá ${username} sala ${room}`



socket.on("message", (data) => {
    createMessage(data)
})


function createMessage(data) {
    const messageDiv = document.getElementById('messages');
    const message = data.message
    //crie uma nova mas n sobrescreva aquelas que já existem
    messageDiv.innerHTML =+ message
    //msg NaN
}


document.getElementById("logout").addEventListener('click', (event) => {
    window.location.href = 'index.html'
})