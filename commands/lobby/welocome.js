const Discord = require('discord.js');
const db = require("quick.db");
const wcha = new db.table('wcha');

module.exports = {
    name: "wscreen",
    aliases: ['welcome', 'powitanie', 'we'],
    usage: "wscreen <kanał> <kolor-HEX> <wiadomość>",
    async execute(client, message, args) {
        message.delete()
        if (!message.guild) return message.channel.send('Ta komenda może zostać użyta tylko na serwerze')
        if (!message.member.permissions.has('ADMINISTRATOR')) return message.channel.send(':settings: Nie masz permisji aby użyć tej komendy!')
        if (args.length < 3) return message.channel.send('nunu')

        const channel = message.mentions.channels.first()
        const color = args[1]
        if (!/^#[0-9A-F]{6}$/i.test(color)) return message.channel.send(`zły kolor HEX`)

        let wiadomosc = args.slice(2).join(" ")
        //if (wiadomosc.includes('{member}')) wiadomosc = wiadomosc.replace(/{member}/g, '${member}')
        let member = message.member

        wcha.set(`${member.guild.id}`, { color: color, text: wiadomosc, channel: channel.id})

        const info = new Discord.MessageEmbed()
        .setColor(wcha.get(`${member.guild.id}.color`))
        .setTitle(`Witaj na serwerze: ${member.guild.name}!`)
        .setDescription(`${member.user}, ` + wcha.get(`${member.guild.id}.text`))
        //.addField('member count', member.guild.memberCount)
        .setThumbnail(member.user.displayAvatarURL())
        .setTimestamp()

        message.channel.send(`Tak będzie wyglądać zaproszenie na ten serwer!\nBędzie ono wysyłane na: <#${wcha.get(`${member.guild.id}.channel`)}>`, info)
    }
}