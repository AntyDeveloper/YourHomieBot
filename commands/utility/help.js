const Discord = require('discord.js');
const { prefix, wersja } = require('../../config.json');

const client = new Discord.Client();
client.commands = new Discord.Collection();

module.exports = {
	name: 'help',
	aliases: ["pomoc"],
	description: 'Wysyła pomocne informacje',
	execute(client, message, args) {
		if (!message.guild) return message.channel.send('Ta komenda może zostać użyta tylko na serwerze')
		message.delete()
		const embed = new Discord.MessageEmbed()
		.setTitle(`Pomoc 🌐`)
		.setDescription(`<:personadd:845790111173312523> **Adminitracyjne**\n> ban, giveaway, oglos, lockdown, slowmode\n\n<:settings:845788459620499516> **Bot**\n> invitebot, discordsupport, userinfo, serverinfo, kontakt\n\n<:bookmark1:845798922709499954> **4Fun**\n> anime, \n\n<:personframe:845799554619670569> **Developerskie**\n> blacklist, unblacklist, changelog\n\n<:archive:845790563243917362> **Informacje o bocie**\n> Wersja bota: ${wersja} | Prefix: ${prefix} | Ping bota: ${message.createdTimestamp - Date.now()}`)
		.addField("<:checklist:845975219914801152> Linki", "[**link do bota**](https://discord.com/api/oauth2/authorize?client_id=845692013320077322&permissions=8&scope=bot) | [**partnerski serwer**](https://discord.gg/TTZRQnEZ59) ", true)
		.setFooter(`Wyslane przez: ${message.author.tag}`, message.author.displayAvatarURL())
		.setColor("#9c34eb")

		message.author.send(embed)
	}
};