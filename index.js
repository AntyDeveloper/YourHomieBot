const Discord = require('discord.js');
const {MessageMentions} = require("discord.js");
const client = new Discord.Client();
const { prefix, token } = require('./config.json');
const regex = MessageMentions.USERS_PATTERN;

client.commands = new Discord.Collection();
client.event = new Discord.Collection();

[`command_handler`, `event_handler`].forEach(handler =>{
    require(`./handlers/${handler}`)(client, Discord);
})

client.on('ready', () => {
    console.log('Ready!');
    client.user.setActivity("z przyjaciółmi", { type: "PLAYING" });
});

client.on('message', message =>{
    let subject = message.content
    if (message.mentions.has(client.user.id)) {
        if (message.content.includes("@here") || message.content.includes("@everyone")) return false;
        //if (message.content === regex.test(subject))
        message.channel.send(`Mój premfix to \` ${prefix} \``)
    };
});

client.login(token);