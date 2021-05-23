const fs = require('fs');
const Discord = require('discord.js');

const client = new Discord.Client();
client.commands = new Discord.Collection();
module.exports = {
	name: 'support',
	description: 'server',
    aliases: ['discord', 'dc'],
	execute(client, message, args) {
    const invite = "https://discord.gg/6QpmYyQeJR"
    const zapros = new Discord.MessageEmbed()
	.setColor('#9c34eb')
	.setTitle('Link zaproszenia do discorda')
    .setDescription(`Zaproszenie <:globe:845819287289331753>\n > [**link do zaproszenia**](${invite})`)
    .setTimestamp()
    .setFooter(`${client.user.username}`, client.user.avatarURL())

    message.react('📧')
    message.author.send(zapros);
}}