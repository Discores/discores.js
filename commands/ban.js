module.exports = {
    name: 'ban',
    requirements: ["error", "succes", "not_allowed", "no_args"],
    execute(client, message, args, outputs) {
        var banmember = message.mentions.members.first()
        args.shift()
        var reason = args.join(" ")
        
        try {
            if (!banmember) {
            eval("message.channel.send(`"+outputs.no_args+"`)")
            }

            if (banmember && member.hasPermission('BAN_MEMBERS')) {
                eval("message.channel.send(`"+outputs.succes+"`)")
                kickmember.kick()
            }

            if (banmember && !member.hasPermission('BAN_MEMBERS')) {
                eval("message.channel.send(`"+outputs.not_allowed+"`)")
                
            }
        } catch (error) {
            eval("message.channel.send(`"+outputs.error+"`)")
            console.log(error)
        }
        


    }
}