const Discord = require('discord.js');
const { prefix } = require('../config.json');

const client = new Discord.Client();
client.commands = new Discord.Collection();

module.exports = {
    name: 'serverinfo',
    description: 'server',
    aliases: ['server',],
    execute(client, message, args) {
        const info = new Discord.MessageEmbed()
        .setColor('#9c34eb')
        .setTitle('Informacje o serwerze')
        .setDescription(`**Nazwa serwera**\n> ${message.guild.name}\n\n**Data założenia serwera**\n> ${message.guild.createdAt}\n\n**Data dołączenia**\n > ${message.guild.joinedTimestamp}`)
        .setTimestamp()
        .setFooter(`${client.user.username}`, client.user.avatarURL())
    
        message.channel.send(info);
    }
};