const Discord = require('discord.js');
const db = require("quick.db");

module.exports = {
    name: "wscreen",
    aliases: ['exit', 'zegnamy','ex'],
    async execute(client, message, args) {
        message.delete()
        if (!message.guild) return message.channel.send('Ta komenda może zostać użyta tylko na serwerze')
        if (!message.member.permissions.has('ADMINISTRATOR')) return message.channel.send('<:settings:845788459620499516> Nie masz permisji aby użyć tej komendy!')
        const channel = message.mentions.channels.first()

        if (!args.length){
            let chx = db.get('wcha_${message.guild.id}')
            client.channels.cache.get(chx).send('ciężko jest żyć lekko')
            return;
        }
        if (!channel) {
            let chx = db.get('echa_${message.guild.id}')
            let guildMember = message.member
            const info = new Discord.MessageEmbed()
                .setColor('#0000FF')
                .setTitle('Żegnaj')
                .setDescription(`Czemu nas opuszczasz :sob: ${guildMember.user.username}`)
                .setThumbnail(guildMember.user.displayAvatarURL())
                .setTimestamp()
            client.channels.cache.get(chx).send(info)
            return;
        } else {
            db.set('echa_${message.guild.id}',channel.id)
            channel.send("nienawidzę poniedzałków")
        }
    }   
}