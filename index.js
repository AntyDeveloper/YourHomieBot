const Discord = require('discord.js');
const client = new Discord.Client();
const { token } = require('./config.json');

client.commands = new Discord.Collection();
client.event = new Discord.Collection();

[`command_handler`, `event_handler`].forEach(handler =>{
    require(`./handlers/${handler}`)(client, Discord);
})

client.on('ready', () => {
    console.log('Ready!');
    client.user.setActivity("z przyjaciółmi", { type: "PLAYING" });
});

client.login(token);