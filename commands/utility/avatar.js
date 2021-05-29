const Discord = require('discord.js');
const moment = require('moment');
const client = new Discord.Client();
client.commands = new Discord.Collection();
const { prefix } = require('../../config.json');


module.exports = {
    name: 'avatar',
    description: 'Pokazuje awatar oznaczonego użytkownika',
    execute(client, message, args) {
        if (!message.guild) return message.channel.send('Ta komenda może zostać użyta tylko na serwerze')
        if (!message.mentions.users.size) {
        message.delete()
        const info = new Discord.MessageEmbed()
        .setColor('#9c34eb')
        .setTitle('Twój avatar')
        .setDescription(``)
        .setImage(`${message.author.displayAvatarURL({ format: 'png', dynamic: true })}`)
        .setTimestamp()
        .setFooter(`${client.user.username}`, message.author.displayAvatarURL())
        message.channel.send(info);
        }
        const taggedUser = message.mentions.users.first();
        const avatarList = message.mentions.users.map(user => {
            const avatarList = new Discord.MessageEmbed()
            .setColor('#9c34eb')
            .setTitle(`Avatar użytkownika ${user.username}`)
            .setDescription(``)
            .setImage(`${user.displayAvatarURL({ format: 'png', dynamic: true })}`)
            .setTimestamp()
            .setFooter(`${client.user.username}`, message.author.displayAvatarURL())
            message.channel.send(avatarList);
    
        });
    }
};