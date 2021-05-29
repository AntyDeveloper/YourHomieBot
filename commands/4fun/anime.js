const Discord = require('discord.js');
const Kitsu = require('kitsu.js');
const kitsu = new Kitsu();
const aq = require('animequote');
const fetch = require("node-fetch")
const { prefix } = require('../../config.json');


module.exports =  {
  name: "anime",
  description: "Informacje o anime",
  usage: "anime <name>",
  execute(client, message, args) {
    if (!message.guild) return message.channel.send('Ta komenda może zostać użyta tylko na serwerze')
    message.delete()
   if (!args[0]) {
     return message.channel.send("Podaj nazwe anime!");
      
    }
        const search = message.content.split(/\s+/g).slice(1).join(" ");
        kitsu.searchAnime(search).then(async result => {
            if (result.length === 0) {
                return message.channel.send(`Nie znaleziono takiego anime jak: **${search}**!`);
            }
          
          const anime = result[0]

            let embed = new Discord.MessageEmbed()
                .setColor('#9c34eb')
                .setAuthor(`${anime.titles.english ? anime.titles.english : search} | ${anime.showType}`, anime.posterImage.original)
                .setDescription(anime.synopsis.replace(/<[^>]*>/g, '').split('\n')[0])
                .addField('❯\u2000\Informacje', `•\u2000\**Japońska nazwa:** ${anime.titles.romaji}\n\•\u2000\**Średnia wiekowa:** ${anime.ageRating}\n\•\u2000\**NSFW:** ${anime.nsfw ? 'Yes' : 'No'}`, true)
                .addField('❯\u2000\Staty', `•\u2000\**Średnia ocena:** ${anime.averageRating}\n\•\u2000\**Miejsce w rankingu:** ${anime.ratingRank}\n\•\u2000\**W rankingu popularności:** ${anime.popularityRank}`, true)
                .addField('❯\u2000\Status', `•\u2000\**Liczba odcinków:** ${anime.episodeCount ? anime.episodeCount : 'N/A'}\n\•\u2000\**Data rozpoczęcia:** ${anime.startDate}\n\•\u2000\**Data zakończenia:** ${anime.endDate ? anime.endDate : "Still airing"}`, true)
            
                .setThumbnail(anime.posterImage.original, 100, 200);
          

            return message.channel.send({ embed })
        }).catch(err => {
            console.log(err) //cathing error
            return message.channel.send(`Nie znaleziono takiego anime jak: **${search}**!`);
        });
    }

}