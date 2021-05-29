const Discord = require('discord.js');
const moment = require('moment');
const client = new Discord.Client();
client.commands = new Discord.Collection();
const { prefix } = require('../../config.json');


module.exports = {
    name: 'user',
    description: 'server',
    aliases: ['info',],
    execute(client, message, args) {
        if (!message.guild) return message.channel.send('Ta komenda może zostać użyta tylko na serwerze')
        message.delete()
        const created = moment(message.author.createdAt).format('DD/MM/YYYY');
        const join = moment(message.member.joinedAt).format('DD/MM/YYYY');
        const info = new Discord.MessageEmbed()
        .setColor('#9c34eb')
        .setThumbnail(`${message.author.avatarURL()}`)
        .setTitle('Informacje o użytkowniku')
        .setDescription(`**Nazwa użytkownika** <:personframe:845799554619670569>\n> ${message.author.tag}\n\n**Data założenia konta** <:settings:845788459620499516>\n> ${created}\n\n**Data dołączenia** <:personadd:845790111173312523>\n > ${join}`)
        .setTimestamp()
        .setFooter(`${client.user.username}`, message.author.displayAvatarURL())
        message.channel.send(info);
    }
};