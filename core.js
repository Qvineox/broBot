const Discord = require('discord.js');
const botconfig = require('./botconfig.js');
const dbHandler = require('./dbHandler')
var bot = new Discord.Client();
var fs = require('fs');

//commands handler
bot.commands = new Discord.Collection();
fs.readdir('./commands/', (err, files) => {
    if (err) console.error(err);

    var jsfiles = files.filter(f => f.split('.').pop() === 'js');
    //console.log(jsfiles.length);
    if (jsfiles.length > 0) {
        console.log('Now loading ' + jsfiles.length + ' commands...')
        jsfiles.forEach((f, i) => {
            var cmds = require(`./commands/${f}`);
            console.log(`${f} command loaded.`)
            bot.commands.set(cmds.config.command, cmds);
        })
    } else {
        return console.log('No commands to load.');
    }
});

//on start operations
bot.on('ready', async() => {
    console.log('Bot launched!');

    let link = await bot.generateInvite();
    console.log(link);
})

//message handler
bot.on('message', (message) => {
    let content = message.content.toLowerCase();


    //console.log(message);
    if (!content.startsWith(botconfig.prefix)) return;
    let commandText = content.slice(botconfig.prefix.length).split(" ");
    var args = commandText.slice(1);

    let cmd = bot.commands.get(commandText[0]);
    if (cmd) cmd.run(bot, message, args);
})

//login with token
bot.login(botconfig.token);

