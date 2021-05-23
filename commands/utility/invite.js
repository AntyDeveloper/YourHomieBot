const Discord = require('discord.js');

const client = new Discord.Client();
client.commands = new Discord.Collection();

module.exports = {
    name: 'invitebot',
    description: 'zaprasza bota na twój serwer',
    aliases: ['zapros', 'botzapros'],
    execute(client, message, args) {
    const zapros = new Discord.MessageEmbed()
    .setColor('#9c34eb')
    .setTitle('Link do zaproszenia bota')
    .setDescription(`Zaproszenie <:globe:845819287289331753>\n > [**link do zaproszenia**](https://discord.com/api/oauth2/authorize?client_id=845692013320077322&permissions=8&scope=bot)`)
    .setTimestamp()
    .setFooter(`${client.user.username}`, client.user.avatarURL())

    message.react('📧')
    message.author.send(zapros);
}
}; 