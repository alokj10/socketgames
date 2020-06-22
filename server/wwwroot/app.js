'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _http = require('http');

var _http2 = _interopRequireDefault(_http);

var _socket = require('socket.io');

var _socket2 = _interopRequireDefault(_socket);

var _routes = require('./routes');

var _routes2 = _interopRequireDefault(_routes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();
var port = process.env.PORT || 4001;
var server = _http2.default.createServer(app);
var io = (0, _socket2.default)(server);

var rooms = [];

app.use(function (req, res, next) {
    //  console.log('client domain - ' + config.clientDomain);
    res.header("Access-Control-Allow-Origin", 'http://localhost:3000');
    res.setHeader("Access-Control-Allow-Methods", "POST, PUT, OPTIONS, DELETE, GET");
    //res.header("Access-Control-Allow-Origin", "http://localhost");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    res.header('Access-Control-Expose-Headers', 'Authorization');
    res.header("Access-Control-Allow-Credentials", true);
    next();
});

app.use('/api/rooms', function (req, resp) {
    console.log('rooms fetch called');
    resp.status(200).json(rooms);
});
app.use('/api', _routes2.default);

var IsUserInRoom = function IsUserInRoom(room, userId) {
    var results = room.users.filter(function (user, i) {
        return user.userId === userId;
    });
    return results && results.length;
};

var IsUserAlreadyInARoom = function IsUserAlreadyInARoom(rooms, userId) {
    var userAlreadyInARoom = rooms.filter(function (room, i) {
        return IsUserInRoom(room, userId);
    });
    return userAlreadyInARoom && userAlreadyInARoom.length > 0;
};

io.on("connection", function (client) {
    console.log("New client connected");

    client.on('create-room', function (payload) {
        console.log('create room called', client.id);

        if (IsUserAlreadyInARoom(rooms, client.id)) {
            console.log('user already part of room: ' + userAlreadyInARoom[0].roomName);
            return;
        }

        var newRoom = {
            roomName: payload.roomName,
            users: []
        };
        newRoom.users.push({
            userId: client.id,
            name: payload.name
        });
        rooms.push(newRoom);
        client.join(newRoom.roomName);
        console.log('room add');
        io.sockets.in(newRoom.roomName).emit('users-list', newRoom.users);
        io.emit('rooms-list', rooms);
        // client.broadcast.emit('rooms-list', rooms);
        //client.emit('rooms-list', rooms);
    });
    client.on('join-room', function (payload) {
        console.log('join room called');

        if (IsUserAlreadyInARoom(rooms, client.id)) {
            console.log('user already part of room: ' + userAlreadyInARoom[0].roomName);
            return;
        }

        rooms.map(function (room, i) {
            if (room.roomName === payload.roomName) {
                room.users.push({
                    userId: client.id,
                    name: payload.name
                });
                client.join(room.roomName);
                console.log('room join');
                io.sockets.in(room.roomName).emit('rooms-list', rooms);
            }
        });
    });
    client.on('move-token', function () {
        console.log("move token");
    });
    client.on('disconnect', function () {
        console.log("Client disconnected");
    });
});

server.listen(port, function () {
    return console.log('Listening game server on port ' + port);
});
//# sourceMappingURL=app.js.map