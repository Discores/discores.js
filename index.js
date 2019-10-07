const djs = require('discord.js')
const fs = require('fs');

exports.login = function(prefix, token, cmds) {
    if (!token || !typeof token == "string") {
        console.error(`Make sure to fill in the token parameter and make sure it's a string.`)
        process.exit()
    }

    if (!cmds || !Array.isArray(cmds)) {
        console.error(`Make sure to fill in the commands parameter and make sure it's an array.`)
        process.exit()
    }

    if (!prefix || !typeof prefix == "string") {
        console.error(`Make sure to fill in the prefix parameter and make sure it's an string.`)
        process.exit()
    }
    
    const client = new djs.Client();

    client.commands = new djs.Collection();

    const commandFiles = fs.readdirSync('./node_modules/jscord/commands').filter(file => file.endsWith('.js'));

    for (const file of commandFiles) {
        const command = require(`./commands/${file}`);
        var ifcommand = cmds.filter(function(cmd) {
            return cmd.name == command.name
        })
        if (ifcommand.length == 1) {
            var commandacceptance = true
            function callback () {if (commandacceptance == true) {
                client.commands.set(command.name, command);
            }}
            var itemsProcessed = 0;
            command.requirements.forEach((item, index, array) => {
                eval(`
                    if (!ifcommand[0].${item}) {
                        commandacceptance = false;
                    }
                `)
                itemsProcessed++;
                if(itemsProcessed === array.length) {
                callback();
                }
            })
            
        }
        
    }

    client.on('message', message => {
        if (!message.content.startsWith(prefix) || message.author.bot) return;
    
        const args = message.content.slice(prefix.length).split(/ +/);
        const command = args.shift().toLowerCase();
    
        if (!client.commands.has(command)) return;
    
        try {
            client.commands.get(command).execute(message, message, args);
        } catch (error) {
            console.error(error);
            message.reply('there was an error trying to execute that command!');
        }
    });

    client.once('ready', () => {
        console.log('Ready!');
    });

    client.login(token)
}

exports.cmd = function(command, text) {

}