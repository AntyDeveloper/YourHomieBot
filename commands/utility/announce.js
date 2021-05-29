const Discord = require('discord.js');

module.exports = {
    name: "oglos",
    aliases: ['ogloszenie', 'announce'],
    async execute(client, message, args) {
        message.delete()
        if (!message.guild) return message.channel.send('Ta komenda może zostać użyta tylko na serwerze')
        if (!message.member.permissions.has('ADMINISTRATOR')) return message.channel.send('<:settings:845788459620499516> Nie masz permisji aby użyć tej komendy!')
        const channel = message.mentions.channels.first()

        if (!args.length) return;
        if (!channel) {
            message.reply("Nie podałeś/aś kanału, na którym mam wysłać ogłoszenie!")
            return;
        } else {
            let announce = args.slice(1).join(" ")
            if (!announce) return message.reply(`Zapomniałeś/aś napisać ogłoszenia!`);
            const embed = new Discord.MessageEmbed()
            .setTitle(`Ogłoszenie 📢`)
            .setDescription(`${announce}`)
            .setFooter(`Sent by: ${message.author.tag}`, message.author.displayAvatarURL())
            .setColor("#9c34eb")
            const msg = await channel.send(embed)
            .then(toReact => {
                toReact.react('<:upvote:847904152225972224>')
                toReact.react('<:Maybe:847904328773402654>')
                toReact.react('<:downvote:847904088187338822>')
            })
            message.react('<:markcheck:847943343862054992>')
        }
    }   
}