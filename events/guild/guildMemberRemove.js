const db = require("quick.db");
const echa = new db.table('echa');

module.exports =  async (Discord, client, member) => {
    const exit = new Discord.MessageEmbed()
    .setColor(echa.get(`${member.guild.id}.color`))
    .setTitle(`Żegnamy z serwera: ${member.guild.name}!`)
    .setDescription(`${member.user}, ` + echa.get(`${member.guild.id}.text`))
    //.addField('member count', member.guild.memberCount)
    .setThumbnail(member.user.displayAvatarURL())
    .setTimestamp()

    const channel = member.guild.channels.cache.find(ch => ch.id === echa.get(`${member.guild.id}.channel`))
    channel.send(exit)
}