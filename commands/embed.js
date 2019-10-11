module.exports = {
    name: 'embed',
    requirements:["error", "color"],
    execute(client, message, args, outputs) {
        var etitle = args.shift()
        
        var edesc = args.join(" ")
        try {
            eval("message.channel.send({embed: {title: `" + etitle + "`,color: " + outputs.color + ",descriptiom: `" + edesc + "`}})")

        } catch (error) {
            message.channel.send(outputs.error)
            console.log(error)
        }
    }
}