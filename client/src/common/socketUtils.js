import socketIOClient from "socket.io-client";
const ENDPOINT = "http://127.0.0.1:4001";
let socket = null;

export const CreateRoom = (model) => {
    console.log('emitting create room', model);
    socket.emit('create-room', model);
}

export const JoinRoom = (userName, roomName) => {

}

export const SubscribeToGameServer = (callback) => {
    if(!socket) {
        socket = socketIOClient(ENDPOINT);
        socket.on('rooms-list', (data) => {
            console.log('room list received');
            callback(data);
        })
        socket.on('users-list', (data) => {
            console.log('users list received');
            callback(data);
        })
    }
}

export const MakeMoveAndLetEveryOneKnow = (allTokenPositions) => {

}