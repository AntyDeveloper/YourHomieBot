const Discord = require('discord.js');
const moment = require('moment');
const client = new Discord.Client();
client.commands = new Discord.Collection();


module.exports = {
    name: 'user',
    description: 'server',
    aliases: ['info',],
    execute(client, message, args) {
        const created = moment(message.author.createdAt).format('DD/MM/YYYY');
        const join = moment(message.member.joinedAt).format('DD/MM/YYYY');
        const info = new Discord.MessageEmbed()
        .setColor('#9c34eb')
        .setThumbnail(`${message.author.avatarURL()}`)
        .setTitle('Informacje o użytkowniku')
        .setDescription(`**Nazwa użytkownika** <:personframe:845799554619670569>\n> ${message.author.tag}\n\n**Data założenia konta** <:settings:845788459620499516>\n> ${created}\n\n**Data dołączenia** <:personadd:845790111173312523>\n > ${join}`)
        .setTimestamp()
        .setFooter(`${client.user.username}`, client.user.avatarURL())
        message.channel.send(info);
    }
};