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

var port = process.env.PORT || 4001;
var server = _http2.default.createServer(app);
var io = (0, _socket2.default)(server);
var app = (0, _express2.default)();

var rooms = [];

app.use('/api/rooms', function (req, resp) {
    console.log('rooms fetch called');
    resp.status(200).json(rooms);
});
app.use('/api', _routes2.default);

io.on("connection", function (client) {
    console.log("New client connected");

    client.on('create-room', function (payload) {
        console.log('create room called');
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
        client.emit('rooms-list', rooms);
    });
    client.on('join-room', function (payload) {
        console.log('join room called');
        var user = {
            userId: client.id,
            name: payload.name,
            roomName: payload.roomName
        };
        var filteredRoom = rooms.filter(function (val, i) {
            return val.roomName === payload.roomName;
        });
        if (filteredRoom && filteredRoom.length > 0) {
            var roomToJoin = filteredRoom[0];
            roomToJoin.users.push({
                userId: client.id,
                name: payload.name
            });
            client.join(roomToJoin.roomName);
            io.sockets.in(roomToJoin.roomName).emit('users-list', roomToJoin.users);
        }
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