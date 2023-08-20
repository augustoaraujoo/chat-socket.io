const socket = io('http://localhost:3005');

const urLSearch = new URLSearchParams(window.location.search);
const username = urLSearch.get('username');
const room = urLSearch.get('select_room');


socket.emit('select_room', { username, room });

console.log(username, room);