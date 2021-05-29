const Discord = require('discord.js');
const { prefix } = require('../../config.json');

const client = new Discord.Client();
client.commands = new Discord.Collection();

module.exports = {
    name: 'invitebot',
    description: 'zaprasza bota na twój serwer',
    aliases: ['zapros', 'botzapros'],
    execute(client, message, args) {
    if (!message.guild) return message.channel.send('Ta komenda może zostać użyta tylko na serwerze')
    message.delete()    
    const zapros = new Discord.MessageEmbed()
    .setColor('#9c34eb')
    .setTitle('Link do zaproszenia bota')
    .setDescription(`> [**link do zaproszenia**](https://discord.com/api/oauth2/authorize?client_id=845692013320077322&permissions=8&scope=bot)`)
    .setTimestamp()
    .setFooter(`${client.user.username}`, client.user.avatarURL())

    message.react("<:markcheck:847943343862054992>")
    message.author.send(zapros);
}
}; 