const Discord = require('discord.js');
const moment = require('moment');
moment().format('DD, MMMM Do YYYY');
const client = new Discord.Client();
client.commands = new Discord.Collection();
const { prefix } = require('../../config.json');



module.exports = {
    name: 'serverinfo',
    description: 'server',
    aliases: ['server',],
    execute(client, message, args) {
        if (!message.guild) return message.channel.send('Ta komenda może zostać użyta tylko na serwerze')
        message.delete()
        const created = moment(message.author.createdAt).format('DD/MM/YYYY');
        const join = moment(message.member.joinedAt).format('DD/MM/YYYY');
        const info = new Discord.MessageEmbed()
        .setColor('#9c34eb')
        .setTitle('Informacje o serwerze')
        .setThumbnail(`${message.author.avatarURL()}`)
        .setDescription(`**Nazwa serwera** <:globe:845819287289331753>\n> ${message.guild.name}\n\n**Wlasciciel serwera** <:personframe:845799554619670569>\n> ${message.guild.owner}\n\n**Liczba użytkowników** <:chart1:845783674377338890>\n> ${message.guild.memberCount}\n\n**Data założenia serwera** <:archive:845790563243917362>\n> ${created}\n\n**Data dołączenia** <:personadd:845790111173312523>\n > ${join}\n\n **Id serwera** <:checklist:845975219914801152>\n> ${message.guild.id}`)
        .setTimestamp()
        .setFooter(`${client.user.username}`)
    
        message.channel.send(info);
    }
};