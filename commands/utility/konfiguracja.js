const Discord = require('discord.js');
const moment = require('moment');
const client = new Discord.Client();
client.commands = new Discord.Collection();
const { prefix } = require('../../config.json');


module.exports = {
    name: 'konfiguracja',
    description: 'Wstępna konfiguracja serwera!',
    aliases: ['konf',],
    execute(client, message, args) {
        if (!message.guild) return message.channel.send('Ta komenda może zostać użyta tylko na serwerze')
        message.delete()
        guild = message.guild
        const info = new Discord.MessageEmbed()
        .setColor('#9c34eb')
        .setThumbnail(`${guild.iconURL()}`)
        .setTitle('Wstępna konfiguracja serwera!')
        .setDescription(`> <:personadd:845790111173312523>** ${prefix}welcome/${prefix}exit** \nUstawienie powitań oraz pożegnań na serwerze.\n\n> <:checklist:845975219914801152> **${prefix}weryfikacja**\n Ustawienie weryfikacji na twoim serwerze.`)
        .setTimestamp()
        .setFooter(`${guild.name}`, guild.iconURL())
        message.channel.send(info);
    }
};