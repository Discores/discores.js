module.exports = {
    name: 'kick',
    requirements: ["error", "succes", "not_allowed", "no_args"],
    execute(client, message, args, outputs) {
        var kickmember = message.mentions.members.first()
        args.shift()
        var reason = args.join(" ")
        
        try {
            if (!kickmember) {
            eval("message.channel.send(`"+outputs.no_args+"`)")
            }

            if (kickmember && member.hasPermission('KICK_MEMBERS')) {
                eval("message.channel.send(`"+outputs.succes+"`)")
                kickmember.kick()
            }

            if (kickmember && !member.hasPermission('KICK_MEMBERS')) {
                eval("message.channel.send(`"+outputs.not_allowed+"`)")
                
            }
        } catch (error) {
            eval("message.channel.send(`"+outputs.error+"`)")
            console.log(error)
        }
        


    }
}