
module.exports =  async (Discord, client, guild) => {
    const welcome = new Discord.MessageEmbed()
    .setColor(`#9c34eb`)
    .setTitle(`${guild.name} usuneli mnie od siebie!`)
    .setDescription(`Aktualna liczba serwerów to 📜 ${client.guilds.cache.size} \n\n Wlasciciel serwera ${guild.owner} \n\n Liczba obsługiowanych członków 📚 ${client.users.cache.size} \n\n Liczba obsługiowanych kanałów 📊 ${client.channels.cache.size}`)
    //.addField('member count', member.guild.memberCount)
    .setThumbnail(guild.iconURL())
    .setTimestamp()
    .setFooter(`${client.user.username}`, client.user.displayAvatarURL())
    const channelID = "850120813645791252"
    client.channels.fetch(channelID).then(channel => {
        channel.send(welcome);
      });
}