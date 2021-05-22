const fs = require('fs');
const Discord = require('discord.js');
const { prefix, token } = require('../config.json');

const client = new Discord.Client();
client.commands = new Discord.Collection();
const osoby = new Discord.Guild(client.memberCount);
module.exports = {
	name: 'server',
	description: 'server',
	execute(client, message, args) {
        const info = new Discord.MessageEmbed()
        .setColor('#9c34eb')
        .setTitle('Informacje o bocie')
        .setDescription('Some description here')
        .addFields(
            { name: 'Regular field title', value: 'Some value here' },
            { name: '\u200B', value: '\u200B' },
            { name: 'Zużycie ramu', value: 'Some value here', inline: true },
            { name: 'Liczba osób', value: `${osoby}`, inline: true },
        )
        .addField('Inline field title', 'Some value here', true)
        .setTimestamp()
        .setFooter('YourHomiesBot', '');
    
        message.channel.send(info);
	}
};