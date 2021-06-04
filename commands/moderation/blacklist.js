const db = require("quick.db");
const blacklist = new db.table('blacklist');
const config = require("../../config.json");
const { prefix, token, ownerID } = require('../../config.json');

module.exports = {
	name: 'blacklist',
    aliases: ['bl'],
	description: 'bl',
	execute(client, message, args) {
  if(message.author.id === ownerID) {
    let user = client.users.fetch(args[0]);
    if(!user) return message.channel.send(`Nie poprawny użytkownik lub id.`);
    
    let fetched = blacklist.get(`blacklist_${user.id}`)
    
    if(!fetched) {
        blacklist.set(`blacklist_${user.id}`, true)
      message.channel.send(`Blacklista!`);
    }else{ 
      return message.channel.send(`Ten użytkownik ma blackliste!`);
    }
  }else{
    message.author.send("Ten użytkownik ma blackliste :D")
    message.delete()
  }
    }}