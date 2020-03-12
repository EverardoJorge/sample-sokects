var socket = io();
socket.on('connect', function() {
    console.log('Connected To Server');
})
socket.on('disconnect', function() {
        console.log('There is not connection to server');
    })
    //// SEND  DATA TO SERVER
socket.emit('sendMessage', {
    user: 'Jorge',
    message: 'Hello World!'
}, function(resp) {
    console.log('Resp. to server: ', resp);
})

//// RECEIVE DATA FROM SERVER
socket.on('sendMessage', function(message) {
    console.log('SERVER: ', message);
})