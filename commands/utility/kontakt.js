const Discord = require('discord.js');
const kanalUstaw = '847174406417416253'
const { prefix } = require('../../config.json');

module.exports = {
    name: 'kontakt',
    description: 'Tworzy nową sprawe!',
    cooldown: 90,
    usage: 'ustawa',
    thumbnail: 'https://cdn.discordapp.com/attachments/838041548250808374/843886175391318026/2Q.png',
    async execute(client, message, args) {
        if (!message.guild) return message.channel.send('Ta komenda może zostać użyta tylko na serwerze')
        const author = message.author
        const channel = client.channels.cache.get(kanalUstaw)
        const minister = message.guild.roles.cache.find(roleN => roleN.name.includes('@everyone'))

        try {
        if (!message.member.roles.cache.has(minister.id)) return message.channel.send(`Aby móc stworzyć ustawę musisz posiadać rolę **📝| Minister |📝**!`)
        message.delete()
        
        const embed0 = new Discord.MessageEmbed()
        .setColor('#eb8634')
        .setTitle(`Witaj ${author.username}!`)
        .setDescription('Zaraz dostaniesz od bota dokładne polecenia co dokładnie zrobić!')

        const embed1 = new Discord.MessageEmbed()
        .setColor('#eb8634')
        .setTitle('Zacznijmy od ministerstwa!')
        .setDescription('Czego bedzie dotyczyć sprawa?\nKlikij w :page_facing_up: aby wyświetlić pełną listę spraw.')

        const listembed = new Discord.MessageEmbed()
        .setTitle('Lista spraw')
        .setColor('#eb8634')
        .setDescription('• współpraca \n • bug bota \n • literówka')

        const filter = collected => collected.author === message.author;
        const msg = await author.send(embed0)
        let collector1

        msg.channel.startTyping();
            setTimeout(() => {
                author.send(embed1).then(sent => {
                    sent.react('📄')

                    const filter = (reaction, user) => {
                        return ['📄'].includes(reaction.emoji.name) && !user.bot;
                    };

                    collector1 = sent.createReactionCollector(filter, {
                        max: 1,
                        time: 20000
                    });

                    collector1.on('end', (collected, reason) => {
                        if (reason === 'time') {
                            collector1.stop()
                        } else {
                            let userReaction = collected.array()[0];
                            let emoji = userReaction._emoji.name;
            
                            if (emoji === '📄') {
                                author.send(listembed)
                            }
                        }
                    })
                });
            }, Math.random() * (4000 - 1000) + 1000);
        msg.channel.stopTyping();

        const collected1 = await msg.channel.awaitMessages(filter, {
            max: 1,
            time: 120000,
            errors: ['time']
        }).catch(collected => { return });

        let answer1 = collected1.first().content

        const embed2 = new Discord.MessageEmbed()
        .setColor('#eb8634')
        .setTitle('Teraz napisz treść swojej sprawy!')
        .setDescription('Napisz tu dokładnie na czym polega sprawa.\nMasz na to całe 10 minut ;)')
        console.log()
        msg.channel.startTyping();
            setTimeout(() => {
                author.send(embed2)
            }, Math.random() * (1500 - 1000) + 1000);
        msg.channel.stopTyping();

        const collected2 = await msg.channel.awaitMessages(filter, {
            max: 1,
            time: 600000,
            errors: ['time'] 
        }).catch(collected => { return });

        let answer2 = collected2.first().content

        const areYouSureEmbed = new Discord.MessageEmbed()
        .setColor(`#eb8634`)
        .setTitle(`Kontakt ${answer1.toUpperCase()}`)
        .setDescription(`**Sprawa kontaktowa:**\n> ${answer2}`)
        .setAuthor(author.tag, author.avatarURL())

        const replyEmbed = new Discord.MessageEmbed()
        .setColor('#eb8634')
        .setTitle('Sprawa wysłana!')
        .setDescription(`Twoja sprawa została wysłana na ${channel}!\nOczekuj na jej sprawdzenie.`)

        message.author.send(`Tak będzie wyglądać twoja sprawa kontaktowa. Jeżeli wszystko jest dobrze kliknij :white_check_mark: aby wysłać sprawe, jeżeli nie kliknji :octagonal_sign: i stwórz sprawe jeszcze raz.`, areYouSureEmbed)
        .then(sent => {
            sent.react('✅')
            sent.react('❌')
        
            const filter = (reaction, user) => {
                return ['✅', '❌'].includes(reaction.emoji.name) && !user.bot;
            };

            const collector2 = sent.createReactionCollector(filter, {
                max: 1,
                time: 60000,
            });

            collector2.on('end', (collected, reason) => {
            if (reason === 'time') {
                return message.author.send('Czas minął :timer:')
            } else {
                let userReaction = collected.array()[0];
                let emoji = userReaction._emoji.name;

                if (emoji === '✅') {
                    author.send(replyEmbed)
                    message.react('✅')
                    channel.send(areYouSureEmbed)
                    .then(toReact => {
                        toReact.react('<:upvote:847904152225972224>')
                        toReact.react('<:Maybe:847904328773402654>')
                        toReact.react('<:downvote:847904088187338822>')
                    })
                } else if (emoji === '🛑') {
                    message.author.send('🚫 Sprawa anulowana')
                    message.react('📛')
                }
            }}
        )});
    } catch (error){
        message.author.send('Czas minął :timer:')
        console.error();
    }
}};