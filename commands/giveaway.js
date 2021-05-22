const fs = require('fs');
const Discord = require('discord.js');
const { prefix, token } = require('./config.json');

const client = new Discord.Client();
client.commands = new Discord.Collection();

module.exports = {
	name: 'giveaway',
	description: 'Ping!',
	execute(message, args) {
            if (!args[0]) return message.channel.send(`You did not specify your time!`);
            if (!args[0].endsWith("d") && !args[0].endsWith("h") && !args[0].endsWith("m"))
              return message.channel.send(`The time needs to have days (d) or hours (h) or minutes (m)`);
            if (isNaN(args[0][0])) return message.channel.send(`It must be a number you know that?`);
          
            let prize = args.slice(1).join("");
            if (!prize) return message.channel.send(`No prize specified!`);
          
            let embed = new Discord.MessageEmbed()
              .setTitle(`New giveaway!`)
              .setDescription(`Host: ${message.author}\nTime: ${args[0]}\nPrize: ${prize}`)
              .setTimestamp(Date.now() + ms(args[0]))
              .setColor(BLUE);
            message.channel.send(embed).then(m => {
              m.react("🎉");
            setTimeout(() => {
              if (m.reactions.cache.get("🎉").count <= 1) {
                const embed = new Discord.MessageEmbed()
                .setColor("RED")
                .setDescription("No winners")
                m.edit(embed)
                return message.channel.send(`Couldnt generate a winner as there is no one in that giveaway!`);
              }
          
              let winner = m.reactions.cache.get("🎉").users.cache.filter((b) => !b.bot).random();
              
              let embed = new Discord.MessageEmbed()
              .setColor("GREEN")
              .setDescription(`Winner: ${winner}`)
              m.edit(embed)
              
              message.channel.send(`The winnder of the giveaway is ${winner}`);
            }, ms(args[0]));
          }
          )}
	}





