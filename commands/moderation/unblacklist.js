const db = require("quick.db");
const blacklist = new db.table('blacklist');
const config = require("../../config.json");
const { prefix, token, ownerID } = require('../../config.json');

module.exports = {
	name: 'unblacklist',
    aliases: ['unbl'],
	description: 'unbl',
	execute(client, message, args) {
  if(message.author.id === ownerID) {
    let user = client.users.fetch(args[0]);
    if(!user) return message.channel.send(`Nie poprawny użytkownik lub id.`);
  
    let fetched = blacklist.get(`blacklist_${user.id}`)
    if(!fetched) {
      return message.channel.send(`Ten użytkownik nie ma blacklisty!`);
    }else{
        blacklist.delete(`blacklist_${user.id}`)
      message.channel.send(`Nie ma już blacklisty`)
    }
  }else{
    return message.channel.send(`No no`)
  }
  
}}