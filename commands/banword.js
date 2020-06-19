const { DiscordAPIError } = require("discord.js");
const dbHandler = require('../dbHandler');

module.exports.run = async (bot, message, args) => {
    
    console.log(args[0]);
    console.log(args[1]);
    if (args[0] == null) return message.reply("Specify a word.")
    var banWord = args[0];
    var punishment = 'none';
    var punishments = new Map([['ban', 1], ['kick', 2], ['mute', 3], ['warning', 4]])
    if (args[1] != null) {
        if (punishments.has(args[1])) {
            punishment = args[1];
            console.log(punishment);
        } else return message.reply("Unidentified punishment. Use kick, ban, mute, warning.")
    }

    message.channel.send({embed: {
        title: "New word banned!",
        description: `Using word "**${banWord}**" is now prohibited.`,
        fields: [
            {
                name: "Punishment",
                value: punishment
            }
        ],
        color: 0xF6231F
    }});
    
}

module.exports.config = {
    command: "banword"
}