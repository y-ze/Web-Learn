let net = require('net');
// 创建tcp服务
let server = new net.Server();
// 端口号
const port = 8888;

let log = function(msg) {
    console.log(msg);
};

// 消息
let serverMsgs = [
    '💁♂️客服小燕：你可以先学 HTML 与 CSS。',
    '💁♂️客服小燕：可以关注素燕这个公众号，我就是和作者学习的，内容非常不错。',
    '💁♂️客服小燕：不客气，请问还有其它事情吗？',
    '💁♂️客服小燕：那我结束本服务了，有什么问题随时咨询我。',
];

// 顺序发送消息给客户端
let sendMsg = function(socket) {
    if(sendIndex < serverMsgs.length) {
        log(serverMsgs[sendIndex]);
        socket.write(serverMsgs[sendIndex]);
        sendIndex += 1;
    }

    log(sendIndex);

    if(sendIndex >= serverMsgs.length) {
        log("结束了服务");
        sendIndex = 0;
    }
}

let sendIndex = 0;

// 监听connection事件
server.on("connection",function(socket){
    // 当收到客户端消息会响应这个事件
    socket.on("data",function(data){
        // data 是二进制数据
        log(data.toString());
        setTimeout(() => {
            sendMsg(socket);
        }, 800);
    });

    server.getConnections(function(err,count){
        log("the client count:" + count);
    });
});

// 监听某个端口
server.listen(port,function(){
    let address = server.address();
    log("server run on: http://127.0.0.1:" + address.port);
})