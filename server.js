var express = require("express")
var app = express();
var http = require('http').createServer(app);
var socketio = require('socket.io')(http);

app.use(express.static("static"))

socketio.on('connection', function (client) {
    console.log("klient się podłączył " + client.id)
    client.on("disconnect", function () {
        console.log("klient się rozłącza")
    })
    client.emit("onconnect", {
        clientName: client.id
    })
    client.on("position", function (data) {
        console.log(data)
        client.broadcast.emit("newBlock", { posX: data.posX, posY: data.posY, posZ: data.posZ });
    })
    client.on("color", function (data) {
        console.log(data)
        client.broadcast.emit("newColor", { color: data.col });
    })
    client.on("size", function (data) {
        console.log(data)
        client.broadcast.emit("newSize", { size: data.siz, posX: data.posX, posY: data.posY, posZ: data.posZ });
    })
    client.on("direction", function (data) {
        console.log(data)
        client.broadcast.emit("newDirection", { direction: data.direction, posX: data.posX, posZ: data.posZ });
    })
    client.on("removing", function (data) {
        console.log(data)
        client.broadcast.emit("rem", {});
    })
    client.on("updating", function (data) {
        console.log(data)
        client.broadcast.emit("up", { tab: data.blocks });
    })
});

http.listen(3000, function () {
    console.log('listening on 3000');
});


