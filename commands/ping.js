module.exports = {
    name: 'ping',
    requirements: ["result"],
    execute(client, message, args) {
        message.channel.send('pong')
    }
}