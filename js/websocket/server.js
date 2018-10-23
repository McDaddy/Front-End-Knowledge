const Koa = require('koa')
const app = new Koa()
const http = require('http')

const socket = require('socket.io');
// const socket = new io();

const server = http.createServer(app.callback());

const io = socket(server);

// 监听客户端与服务端的连接
io.on('connection', function(socket) {
    // send方法来给客户端发消息
    socket.send('青花瓷');
    // 监听客户端的消息是否接收成功
    socket.on('message', function(msg) {
        console.log(msg);  // 客户端发来的消息
        socket.send('天青色等烟雨，而我在等你' );
    });
});
// 监听3000端口
server.listen(3000);