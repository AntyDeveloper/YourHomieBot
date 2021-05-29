const fs = require('fs');
const Discord = require('discord.js');
const { prefix } = require('../../config.json');

const client = new Discord.Client();
client.commands = new Discord.Collection();
module.exports = {
	name: 'support',
	description: 'server',
    aliases: ['discord', 'dc'],
	execute(client, message, args) {
    if (!message.guild) return message.channel.send('Ta komenda może zostać użyta tylko na serwerze')
    message.delete()
    const invite = "https://discord.gg/6QpmYyQeJR"
    const zapros = new Discord.MessageEmbed()
	.setColor('#9c34eb')
	.setTitle('Link zaproszenia do discorda')
    .setDescription(`Zaproszenie <:globe:845819287289331753>\n > [**link do zaproszenia**](${invite})`)
    .setTimestamp()
    .setFooter(`${client.user.username}`, guild.displayAvatarURL())

    message.react("<:markcheck:847943343862054992>")
    message.author.send(zapros);
}}