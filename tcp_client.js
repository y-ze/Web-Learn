let net = require('net');
// 创建一个socket连接
let client = new net.Socket();

let log = function(msg) {
    console.log(msg);
};

let msgs = [
    '素燕：你好，如何才能从 0 开始入门前端学习呢？',
    '素燕：有什么好的资源推荐吗？',
    '素燕：那我关注学习一下，谢谢你。',
    '素燕：暂时没有了。'
];

// 发消息
let sendMsg = function() {
    if(sendIndex < msgs.length) {
        log(msgs[sendIndex]);
        client.write(msgs[sendIndex]);
        sendIndex += 1;
    }else {

    }
}

let sendIndex = 0;

client.connect('8888','127.0.0.1',function(){
    log('have connected to server');
    sendMsg();
});

// 收到server端发来的消息
client.on('data',function(data){
    log(data.toString());
    setTimeout(() => {
        sendMsg();
    }, 1000);
});