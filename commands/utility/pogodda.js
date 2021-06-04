const weather = require('weather-js');
const Discord = require('discord.js');

module.exports = {
    name: 'pogoda',
    description: 'Wyświetla informacje o pogodzie dla podanego regionu, miasta',
    aliases: ['weather', 'prognoza'],
    usage: 'pogoda <miasto>',
    thumbnail: 'http://blob.weather.microsoft.com/static/weather4/en/law/34.gif',
    execute(client, message, args) {
    
        message.delete()
        if (!message.guild) return message.channel.send('Ta komenda może zostać użyta tylko na serwerze')
        weather.find({search: args.join(" "), degreeType: 'C', lang: 'pl'}, function (error, result) {
        if (error) return message.channel.send(error);
        if (!args[0]) return message.channel.send('Sprecyzuj lokaliczację')

        if (result === undefined || result.length === 0) return message.channel.send('**Zła** lokalizacja podana');

        var current = result[0].current;
        var location = result[0].location;

        const embed = new Discord.MessageEmbed()
        .setDescription(`**Ogólnie:** ${current.skytext}`)
        .setTitle(`Prognoza pogody dla: ${current.observationpoint}`)
        .setThumbnail(current.imageUrl)
        .setColor('#9c34eb')

        if (location.timezone > 0) {
            embed.addField('Strefa czasowa', `UTC +${location.timezone}`, true)
        } else {
            embed.addField('Strefa czasowa', `UTC ${location.timezone}`, true)
        }

        const weatherinfo = new Discord.MessageEmbed(embed)
        .addField('Temperatura', `${current.temperature} C°`, true)
        .addField('Odczuwalna', `${current.feelslike} C°`, true)
        .addField('Wiatr', current.winddisplay, true)
        .addField('Wilgotność', `${current.humidity}%`, true)

        message.channel.send(weatherinfo)
        })        
    }}