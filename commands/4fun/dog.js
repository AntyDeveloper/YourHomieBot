const Discord = require('discord.js');
const client = new Discord.Client();
client.commands = new Discord.Collection();
const { prefix } = require('../../config.json');
const discordgifs = require('@dy_lan19/discord.gifs');

module.exports = {
    name: 'dog',
    description: 'losuje ci randomowego psa.',
    aliases: [','],
    async execute(client, message, args) {
        if (!message.guild) return message.channel.send('Ta komenda może zostać użyta tylko na serwerze')
        const wifu = await discordgifs.Dog()
        message.delete()
        const info = new Discord.MessageEmbed()
        .setColor('#9c34eb')
        .setTitle('Random pies')
        .setDescription(``)
        .setTimestamp()
        .setImage(`${wifu}`)
        .setFooter(`${client.user.username}`, client.user.displayAvatarURL())
        message.channel.send(info);   
}   
};