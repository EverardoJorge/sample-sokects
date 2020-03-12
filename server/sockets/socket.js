const { io } = require('../server')

io.on('connection', (client) => {

    console.log(`User Connected :)`);

    client.emit('sendMessage', {
        user: 'Admin',
        message: 'Welcome to this app'
    })

    client.on('disconnect', () => {
        console.log('User Disconnect :(');
    })

    client.on('sendMessage', (data, callback) => {
        console.log(data);

        client.broadcast.emit('sendMessage', data);
        /**
         * if (message.user) {
            callback({
                message: 'It is OK'
            })
        } else {
            callback({
                message: 'This is not ok!'
            })
        }
         */
    })
})