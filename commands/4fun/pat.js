const Discord = require('discord.js');
const client = new Discord.Client();
client.commands = new Discord.Collection();
const { prefix } = require('../../config.json');
const discordgifs = require('@dy_lan19/discord.gifs');

module.exports = {
    name: 'pat',
    description: 'Uderzysz oznaczoną osobe.',
    aliases: [,],
    async execute(client, message, args) {
        message.delete()
        if (!message.guild) return message.channel.send('Ta komenda może zostać użyta tylko na serwerze')
        const reakcja = await discordgifs.Pat()
        const autor1 = message.author
        const user1 = message.mentions.users.first();
        if (user1.id === autor1.id) {
            return message.channel.send('Nie podałeś 2 osoby :c')
        } else {
            if (!user1) return message.channel.send('Nie podałeś 2 osoby :c')
        const info = new Discord.MessageEmbed()
        .setColor('#9c34eb')
        .setDescription(`${autor1} przytulił/a ${user1}`)
        .setTimestamp()
        .setImage(`${reakcja}`)
        .setFooter(`${client.user.username}`, client.user.displayAvatarURL())
        message.channel.send(info);   
    
}   }
};