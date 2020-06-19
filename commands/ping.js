const { DiscordAPIError } = require("discord.js");

module.exports.run = async (bot, message, args) => {
    
    var ping = Date.now() - message.createdTimestamp + " ms";
    var color;
    if (parseInt(ping) >= 1000) {
        color = 0xFF5656
    } else 
    if (parseInt(ping) < 500) {
        color = 0xA1FF4D
    } else {
        color = 0xFFFA53
    }

    message.channel.send({embed: {
        title: "Pong!",
        description: `My current ping is: ${ping}`,
        color: color
    }});
    
}

module.exports.config = {
    command: "ping"
}