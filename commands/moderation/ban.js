const Dicscord = require('discord.js')

module.exports = {
	name: 'ban',
    aliases: ['b'],
	description: 'banuje gnojka',
	execute(client, message, args) {
    if (!message.guild) return message.channel.send('Ta komenda może zostać użyta tylko na serwerze')
    if (!message.member.permissions.has('ADMINISTRATOR')) return message.channel.send('<:settings:845788459620499516> Nie masz permisji aby użyć tej komendy!')
        const targetUser = message.mentions.users.first()
        if (!targetUser) return;
        if (targetUser.id === message.author.id) return message.channel.send('Nie możesz zbanować samego siebie!')
        if (targetUser.id === client.user.id) return message.channel.send('Naprawdę chcesz mnie zbanować :pleading_face:')
        const reason = args.slice(1).join(" ")

        const banEmbed = new Dicscord.MessageEmbed()
        .setColor('RED')
        .setDescription(`**Serwer:** ${message.guild.name}\n**Actioned by:** ${message.author}\n**Czynność:** ban\n**Powód:** ${reason ? `${reason}`:`\`nie podano powodu\``}`)

        try {
            targetUser.ban()
            targetUser.send(banEmbed)
            message.channel.send(`Użytkownik **${targetUser.tag}** został zbanowany! :airplane: `)
        } catch {
            message.channel.send('Wystąpił problem przy banowaniu użytkownika')
        }
    }
}