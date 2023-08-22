const socket = io('http://localhost:3005');

const urLSearch = new URLSearchParams(window.location.search);
const username = urLSearch.get('username');
const room = urLSearch.get('select_room');

const userDiv = document.getElementById('username');
userDiv.innerHTML = `Olá ${username} sala ${room}`

socket.emit('select_room',
    { username, room },
    messages => {
        messages.forEach(message => createMessage(message))
    });

document.getElementById('message_input').addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
        const message = event.target.value;
        const data = {
            room,
            username,
            message
        }
        socket.emit("message", data);
        event.target.value = ''
    }
})


socket.on("message", data => {
    createMessage(data)
})


function createMessage(data) {
    const messageDiv = document.getElementById('messages');
    messageDiv.innerHTML += `
    <div class="new_message">
      <label class="form-label">
        <strong>${data.username}</strong> <span> ${data.message} - ${dayjs(data.createdAt).format('DD/MM HH:mm')}</span>
      </label>
    </div>
  `
}


document.getElementById("logout").addEventListener('click', (event) => {
    window.location.href = 'index.html'
})