# JScord
A Discord API built using Discord.js, with pre-built commands.
Not wanting to write every commands, don't worry, we've got you covered.

Every command you need is pre-built, the only thing we need is the commands you want to use and their text outputs, we will do the rest. The library includes general commands such as ban and kick, do you want a command that is not supported yet? Open an Issue and suggest the command that you want to be made, and we will make it!
Want to contribute to this library by making your adding your command? Fork this project, add your command and create a pull request.

---

# Installation
Install the api using:
```
npm install jscord
```
---

# Using the libary
Now create your main file, for a basic bot setup use the example and replace `'token'` with your bot token. 
```js
const jscord = require('jscord')

const cmds = []

//ping command
cmds.push({
    "name":"ping",
    "output":"Pong! ${client.ping}ms!"
})
//login using your prefix, token, and the commands you want to import.
jscord.login("!", 'token', cmds)
```

---

# Info
If you have any questions, feel free to contact `TrizlyBear#7066` on Discord or join [the Discord server](https://discord.gg/3Zs5ay7)
