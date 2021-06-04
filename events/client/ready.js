
const { prefix, wersja } = require('../../config.json');

module.exports =  async (Discord, client) => {
    const serwery = `${client.guilds.cache.size}`
    const activities_list = [
    `| Prefix 🔧 ${prefix} |`, 
    `| Serwery 📃 ${serwery} |`,
    `| Werjsa 📚 ${wersja} |`,
    `| Komenda pomocy 📄 ${prefix}pomoc |` 
      ]; 
    console.log(`${client.user.tag} jest wlaczony!`);
    let i = 0;
    setInterval(() => {
        client.user.setActivity(activities_list[i++ % activities_list.length], { type: 'PLAYING' }); 
    }, 30000); // 
  };