import express from 'express';
import http from 'http';
import socketIo from 'socket.io';
import routes from './routes';

const app = express();
const port = process.env.PORT || 4001;
const server = http.createServer(app);
const io = socketIo(server);

let rooms = [];

app.use(function(req,res,next){
  //  console.log('client domain - ' + config.clientDomain);
    res.header("Access-Control-Allow-Origin", 'http://localhost:3000');
    res.setHeader("Access-Control-Allow-Methods", "POST, PUT, OPTIONS, DELETE, GET");
    //res.header("Access-Control-Allow-Origin", "http://localhost");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    res.header('Access-Control-Expose-Headers', 'Authorization');
    res.header("Access-Control-Allow-Credentials", true);
    next();
})

app.use('/api/rooms', (req, resp) => {
    console.log('rooms fetch called');
    resp.status(200).json(rooms);
})
app.use('/api', routes);

const IsUserInRoom = (room, userId) => {
    let results = room.users.filter((user, i) => {
                    return user.userId === userId;
                });
    return results && results.length;
}

const IsUserAlreadyInARoom = (rooms, userId) => {
    let userAlreadyInARoom = rooms.filter((room, i) => {
        return IsUserInRoom(room, userId);
    });
    return userAlreadyInARoom && userAlreadyInARoom.length > 0;
}

io.on("connection", (client) => {
    console.log("New client connected");

    client.on('create-room', (payload) => {
        console.log('create room called', client.id);

        if (IsUserAlreadyInARoom(rooms, client.id)) {
            console.log('user already part of room: ' + userAlreadyInARoom[0].roomName);
            return;
        }

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
        io.emit('rooms-list', rooms);
        // client.broadcast.emit('rooms-list', rooms);
        //client.emit('rooms-list', rooms);
    })
    client.on('join-room', (payload) => {
        console.log('join room called');
        
        if (IsUserAlreadyInARoom(rooms, client.id)) {
            console.log('user already part of room: ' + userAlreadyInARoom[0].roomName);
            return;
        }

        rooms.map((room, i) => {
            if(room.roomName === payload.roomName) {
                room.users.push({
                    userId: client.id,
                    name: payload.name
                })
                client.join(room.roomName);
                console.log('room join');
                io.sockets.in(room.roomName).emit('rooms-list', rooms);
            }
        })
    })
    client.on('move-token', () => {
        console.log("move token");
    })
    client.on('disconnect', () => {
        console.log("Client disconnected");
    })
});

server.listen(port, () => console.log(`Listening game server on port ${port}`));
