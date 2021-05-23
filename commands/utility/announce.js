const Discord = require('discord.js');

module.exports = {
    name: "oglos",
    aliases: ['ogloszenie', 'announce'],
    async execute(client, message, args) {
        if (!message.member.permissions.has('ADMINISTRATOR')) return message.channel.send('❌ Nie masz permisji aby użyć tej komendy!')
        const channel = message.mentions.channels.first()

        if (!args.length) return;
        if (!channel) {
            message.reply("Nie podałeś/aś kanału, na którym mam wysłać ogłoszenie!")
            return;
        } else {
            let announce = args.slice(1).join(" ")
            if (!announce) return message.reply(`Zapomniałeś/aś napisać ogłoszenia!`);
            const embed = new Discord.MessageEmbed()
            .setTitle(`Ogłoszenie`)
            .setDescription(`${announce}`)
            .setFooter(`Sent by: ${message.author.tag}`)
            .setColor("#9c34eb")
            const msg = await channel.send(embed)
            msg.react('📢')
            message.react('✅')
        }
    }   
}