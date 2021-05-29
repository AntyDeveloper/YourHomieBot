const Discord = require('discord.js');
const moment = require('moment');
const { prefix } = require('../../config.json');

module.exports = {
    name: "changelog",
    aliases: ['chl', 'chlog'],
    async execute(client, message, args) {
        message.delete()
        const send = moment(new Date()).format('DD/MM/YYYY');
        if (!message.guild) return message.channel.send('Ta komenda może zostać użyta tylko na serwerze')
        if (!message.member.permissions.has('ADMINISTRATOR')) return message.channel.send('<:settings:845788459620499516> Nie masz permisji aby użyć tej komendy!')
        const channel = message.mentions.channels.first()
       
        if (!args.length) return;
        if (!channel) {
            message.reply("Nie podałeś/aś kanału, na którym mam wysłać ogłoszenie!")
            return;
        } else {
            const nrupdate = args.slice(1, 2).join(" ")
            if (!nrupdate) return message.reply(`Zapomniałeś/aś podać numeru update'u!`);

            let content = args.slice(2).join(" ")
            let announce = args.slice(3).join(" ")
            if (!announce) return message.reply(`Zapomniałeś/aś napisać zawartosci wiadomosci!`);
            if (message.content.includes('--')) content = content.replace(/--/g, '\n')
            const embed = new Discord.MessageEmbed()
            .setTitle(`Aktualności 🛠️`)
            .setDescription(`<:globe:845819287289331753> **Numer aktualizacji:**\n ${nrupdate}\n\n<:settings:845788459620499516> **Zmiany:**\n${content}\n\n <:personadd:845790111173312523> **Dodane przez:**\n ${message.author.tag}\n\n<:bookmark1:845798922709499954> **Data aktualizacji:**\n ${send}  `)
            .setFooter(`Wyslane przez: ${message.author.tag}`, message.author.displayAvatarURL())
            .setColor("#9c34eb")
            const msg = await channel.send(embed)
            message.react('<:markcheck:847943343862054992>')
        }
    }   
}
