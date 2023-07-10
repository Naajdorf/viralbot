const Discord = require('discord.js');

const config = {
  discordToken: ''
};

const client = new Discord.Client({ intents: [Discord.Intents.FLAGS.GUILDS, Discord.Intents.FLAGS.GUILD_MESSAGES] });

client.on('ready', () => {
  console.log(`[ViralBot] Pomyślnie zalogowałeś się do systemu.`);

  const activity = ':green_circle: Graczy: 1';

  client.user.setActivity(activity);
  console.log(`Aktywność ustawiona na: ${activity}`);
});

client.login(config.discordToken);
