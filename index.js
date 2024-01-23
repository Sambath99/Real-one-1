const Discord = require('discord.js-selfbot-v13');
const client1 = new Discord.Client({
  checkUpdate: false,
});
const client2 = new Discord.Client();

const keepAlive = require('./server.js');
const saveserver = require('./saveserver.js');
const configureRichPresence = require('./richPresenceConfig.js');

keepAlive();

let onlineStatus = true;

const setPresence = (client) => {
  const status = onlineStatus ? 'online' : 'dnd';
  client.user.setPresence({ status, afk: false });
  onlineStatus = !onlineStatus;
};

client1.on('ready', async () => {
  console.clear();
  console.log(`${client1.user.tag} - rich presence started!`);

  // Set initial presence
  setPresence(client1);

  // Set presence every 10 seconds
  setInterval(() => {
    setPresence(client1);
  }, 10000);

  const richPresence = configureRichPresence();
  client1.user.setActivity(richPresence);
});

client2.on('ready', async () => {
  console.clear();
  console.log(`${client1.user.tag} - rich presence started!`);
  console.log(`${client2.user.tag} - rich presence started!`);

  // Set initial presence
  setPresence(client2);

  // Set presence every 10 seconds
  setInterval(() => {
    setPresence(client2);
  }, 10000);

  const richPresence = configureRichPresence();
  client2.user.setActivity(richPresence);
});

// Assuming saveserver.js has a function named saveServerData
client1.on('message', (message) => {
  saveserver.saveServerData(message);
  saveserver.createServerFromData(message, client1);
});

client2.on('message', (message) => {
  saveserver.saveServerData(message);
  saveserver.createServerFromData(message, client2);
});

client1.login(process.env.TOKEN1);
client2.login(process.env.TOKEN2);
