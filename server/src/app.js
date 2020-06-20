import express from 'express';
import http from 'http';
import socketIo from 'socket.io';
import routes from './routes';

const port = process.env.PORT || 4001;
const server = http.createServer(app);
const io = socketIo(server);
const app = express();

let rooms = [];

app.use('/api/rooms', (req, resp) => {
    console.log('rooms fetch called');
    resp.status(200).json(rooms);
})
app.use('/api', routes);

io.on("connection", (client) => {
    console.log("New client connected");

    client.on('create-room', (payload) => {
        console.log('create room called');
        let newRoom = {
            roomName: payload.roomName,
            users: []
        }
        newRoom.users.push({
            userId: client.id,
            name: payload.name
        })
        rooms.push(newRoom);
        client.join(newRoom.roomName);
        console.log('room add');
        io.sockets.in(newRoom.roomName).emit('users-list', newRoom.users);
        client.emit('rooms-list', rooms);
    })
    client.on('join-room', (payload) => {
        console.log('join room called');
        let user = {
            userId: client.id,
            name: payload.name,
            roomName: payload.roomName
        }
        let filteredRoom = rooms.filter((val, i) => {
            return val.roomName === payload.roomName
        });
        if (filteredRoom && filteredRoom.length > 0) {
            let roomToJoin = filteredRoom[0];
            roomToJoin.users.push({
                userId: client.id,
                name: payload.name
            })
            client.join(roomToJoin.roomName);
            io.sockets.in(roomToJoin.roomName).emit('users-list', roomToJoin.users);
        }
    })
    client.on('move-token', () => {
        console.log("move token");
    })
    client.on('disconnect', () => {
        console.log("Client disconnected");
    })
});

server.listen(port, () => console.log(`Listening game server on port ${port}`));
