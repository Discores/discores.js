module.exports = {
    name: 'ping',
    execute(client, message, args) {
        message.channel.send('pong')
    }
}