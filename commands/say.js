module.exports = {
    name: 'say',
    requirements:["error"],
    execute(client, message, args, outputs) {
        try {
            message.channel.send(args.join(" "))
        } catch (error) {
            message.channel.send(error)
            console.log(error)
        }
        
    }
}