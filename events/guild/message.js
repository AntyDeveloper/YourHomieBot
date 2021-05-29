require('dotenv').config();
const db = require("quick.db");
const blacklist = new db.table('blacklist');

module.exports = (Discord, client, message) => {
    const { prefix } = require('../../config.json')

    if (message.author.bot) return;
    if (!message.content.startsWith(prefix) && !message.content.startsWith(prefix.toUpperCase())) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const cmd = args.shift().toLowerCase();
    
    const command = client.commands.get(cmd) || client.commands.find(a => a.aliases && a.aliases.includes(cmd));
        
    let fetched = blacklist.fetch(`blacklist_${message.author.id}`)

    if (fetched) {
        message.delete()
        message.author.send('Zostałeś zblacklistowany z bota przez Ownera')
    } else if (command) command.execute(client, message, args, Discord);
}