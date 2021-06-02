const Discord = require('discord.js');
const { MessageMentions } = require("discord.js");
const client = new Discord.Client();
const { prefix, token, wersja } = require('./config.json');
const regex = MessageMentions.USERS_PATTERN;

client.commands = new Discord.Collection();
client.event = new Discord.Collection();

[`command_handler`, `event_handler`].forEach(handler =>{
  require(`./handlers/${handler}`)(client, Discord);
})
const activities_list = [
  `Prefix: ${prefix}`, 
  `Serwery: ${client.guilds.cache.size}`,
  `Werjsa: ${wersja}`,
  `All komendy: ${prefix}pomoc` 
  ]; 
client.on('ready', () => {
  console.log(`${client.user.tag} jest wlaczony!`);
  let i = 0;
  setInterval(() => {
      client.user.setActivity(activities_list[i++ % activities_list.length], { type: 'PLAYING' }); 
  }, 30000); // 
});
client.on('message', message => {
  const { last_letter } = require('./config.json');
  if (message.channel.id !== last_letter) return;
  if (message.content.includes(" ")) return message.delete()
  if (/[^a-zA-Z]/.test(message.content)) return message.delete()

  message.channel.messages.fetch({ limit: 2 }).then(messages => {
    let msgC1 = messages.first().content.slice(0, 1)
    let msgC2 = messages.last().content.slice(-1)
    if (msgC1 !== msgC2) return message.delete()
  })

});

const db = require("quick.db");

client.on('guildMemberAdd',(guildMember) => {
    console.log(guildMember.user.username)
    let chx = db.get('wcha_${message.guild.id}')
    if (chx == null){
        return;
    }else{
      client.channels.cache.get(chx).send("@"+guildMember.user.username)
      const info = new Discord.MessageEmbed()
        .setColor('#00ff00')
        .setTitle('Witaj na serwerze')
        .setDescription(`Serdecznie witamy na serwerze ${guildMember.user.username}`)
        .setThumbnail(guildMember.user.displayAvatarURL())
        .setTimestamp()
      client.channels.cache.get(chx).send(info)
    }
});

client.on('guildMemberRemove',(guildMember) => {
  console.log(guildMember.user.username)
  let chx = db.get('wcha_${message.guild.id}')
  if (chx == null){
      return;
  }else{
    client.channels.cache.get(chx).send("@"+guildMember.user.username)
    const info = new Discord.MessageEmbed()
      .setColor('#0000FF')
      .setTitle('Żegnaj')
      .setDescription(`Czemu nas opuszczasz :sob: ${guildMember.user.username}`)
      .setThumbnail(guildMember.user.displayAvatarURL())
      .setTimestamp()
    client.channels.cache.get(chx).send(info)
  }
});

client.login(token);