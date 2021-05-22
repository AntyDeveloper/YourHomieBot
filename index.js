const Discord = require('discord.js');
const client = new Discord.Client();
const fs = require('fs');
const { prefix, token } = require('./config.json');
client.commands = new Discord.Collection();


client.once('ready', () => {
    console.log('Ready!');
    client.user.setActivity("z przyjaciółmi", { type: "PLAYING" });
});
client.on('message', message => {
	if (!message.content.startsWith(prefix) || message.author.bot) return;

	const args = message.content.slice(prefix.length).trim().split(/ +/);
    const command = args.shift().toLowerCase();
    if (command === 'ping') {
		message.channel.send('Pong.');
    }
});

client.login(token);