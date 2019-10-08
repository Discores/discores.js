module.exports = {
    name: 'ping',
    requirements: ["result"],
    execute(client, message, args, outputs) {
        // eval("var pingthing = `"+outputs.result+"`")
        // message.channel.send(pingthing)
        eval("message.channel.send(`"+outputs.result+"`)")
    }
}