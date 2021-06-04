const Discord = require('discord.js');
const client = new Discord.Client();
client.commands = new Discord.Collection();
const { prefix } = require('../../config.json');
const discordgifs = require('@dy_lan19/discord.gifs');

module.exports = {
    name: 'fox',
    description: 'losuje ci randomowego lisa.',
    aliases: [','],
    async execute(client, message, args) {
        if (!message.guild) return message.channel.send('Ta komenda może zostać użyta tylko na serwerze')
        const wifu = await discordgifs.Fox()
        message.delete()
        const info = new Discord.MessageEmbed()
        .setColor('#9c34eb')
        .setTitle('Random lis')
        .setDescription(``)
        .setTimestamp()
        .setImage(`${wifu}`)
        .setFooter(`${client.user.username}`, client.user.displayAvatarURL())
        message.channel.send(info);   
}   
};