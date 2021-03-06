const Discord = require('discord.js');
const { prefix, wersja } = require('../../config.json');
const os = require('os')
require('../../inlineReply')

const client = new Discord.Client();
client.commands = new Discord.Collection();

module.exports = {
	name: 'botinfo',
        aliases: ['bot'],
	description: 'botifno comand',
	execute(client, message, args) {
        message.delete()
        if (!message.guild) return message.channel.send('Ta komenda może zostać użyta tylko na serwerze')
        let totalSeconds = (client.uptime / 1000);
        let days = Math.floor(totalSeconds / 86400);
        totalSeconds %= 86400;
        let hours = Math.floor(totalSeconds / 3600);
        totalSeconds %= 3600;
        let minutes = Math.floor(totalSeconds / 60);
        let seconds = Math.floor(totalSeconds % 60);
        const uptime = `\`${days}d ${hours}h ${minutes}m ${seconds}s\``;
        const info = new Discord.MessageEmbed()
        .setColor('#9c34eb')
        .setTitle('Informacje o bocie')
        .setDescription(`**UpTime** <:archive:845790563243917362>\n > ${uptime}\n\n **Użycie ramu** <:settings:845788459620499516>\n > ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(0)}mb / ${(os.totalmem() / 1024 / 1024).toFixed(0)}mb \n\n**Wszystkie serwery** <:personadd:845790111173312523>\n > ${message.client.guilds.cache.size} \n\n **Ping bota** <:chart1:845783674377338890>\n > ${message.createdTimestamp - Date.now()}ms \n\n**Developerzy** <:personframe:845799554619670569> \n > <@679361902178205706> <@534781539691659264>\n\n**Wszystkie komendy** <:bookmark1:845798922709499954>\n > ${prefix}pomoc\n\nWersja bota: ${wersja}`)
        .setTimestamp()
        .setFooter(`${client.user.username}`, client.user.avatarURL())
    
        message.channel.send(info);
	}
};