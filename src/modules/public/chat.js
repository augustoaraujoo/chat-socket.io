const socket = io('http://localhost:3005');

const urLSearch = new URLSearchParams(window.location.search);
const username = urLSearch.get('username');
const room = urLSearch.get('select_room');

const userDiv = document.getElementById('username');
userDiv.innerHTML = `Olá ${username} você está conectado na sala ${room}`
// emitindo evento da sala selecionada e username para o socket.io
// passando o callback para receber as mensagens do servidor
socket.emit('select_room',
    { username, room },
    (messages) => {
        messages.forEach(message => createMessage(message))
    });



// event input-> emitindo evento para o socket.io com os dados 
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

//escutando o evento message e passando data para a func
socket.on("message", data => {
    createMessage(data)
})


socket.on("total_msg", (data) => {
    console.log(data);
    const totalMSG = document.getElementById('totalMSG');
    totalMSG.innerHTML=`${data.totalMsgInRoom}`
})



// func innerhtml com data vindo do scoket message
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



// evento btn logout
document.getElementById("logout").addEventListener('click', (event) => {
    window.location.href = 'index.html'
})