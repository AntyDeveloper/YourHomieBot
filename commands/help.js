const fs = require('fs');
const Discord = require('discord.js');
const { prefix, token } = require('../config.json');

const client = new Discord.Client();
client.commands = new Discord.Collection();

module.exports = {
	name: 'help',
	description: 'Ping!',
	execute(client, message, args) {
        message.channel.send(`Prefix bota: \` y \`\nWszyscy użytkownicy: ${message.guild.memberCount}`);
	}
};