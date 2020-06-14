const { DiscordAPIError } = require("discord.js");

var Discord = require('discord.js');
var bot = new Discord.Client();

bot.login('NzIxMzY4NzcxMzAxNzM2NDU5.XuTiqQ.0rYRR6HyR5fAOFSEEK9jOSkudUs');

bot.on('ready', async() => {
    console.log('Bot launched!');

    let link = await bot.generateInvite();
    console.log(link);
})

