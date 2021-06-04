const Discord = require('discord.js');
const client = new Discord.Client();
client.commands = new Discord.Collection();
const { prefix } = require('../../config.json');
const randomanime = require('random-anime')

module.exports = {
    name: 'ranime',
    description: 'randomowe anime',
    aliases: ['ra',],
    execute(client, message, args) {
        if (!message.guild) return message.channel.send('Ta komenda może zostać użyta tylko na serwerze')
        const anime = randomanime.anime();
        message.delete()
        const info = new Discord.MessageEmbed()
        .setColor('#9c34eb')
        .setTitle('Random Anime')
        .setDescription(``)
        .setTimestamp()
        .setImage(`${anime}`)
        .setFooter(`${client.user.username}`, client.user.displayAvatarURL())
        message.channel.send(info);
    }
};