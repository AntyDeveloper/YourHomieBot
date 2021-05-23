const Discord = require('discord.js');

const client = new Discord.Client();
client.commands = new Discord.Collection();

module.exports = {
	name: 'help',
	description: 'Wysyła pomocne informacje',
	execute(client, message, args) {
        message.channel.send(`Prefix bota: \` y \`\nWszyscy użytkownicy: ${message.guild.memberCount}`);
	}
};