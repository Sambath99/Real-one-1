const fs = require('fs');

// Function to save server data
const saveServerData = (message) => {
  const prefix = fs.readFileSync('./prefix.txt', 'utf8').trim();
  const saveCommand = 'so'; // Updated save command to 'so/sv'
  if (message.content.startsWith(`${prefix}${saveCommand}`)) {
    const serverData = {
      name: message.guild.name,
      id: message.guild.id,
      channels: message.guild.channels.cache.map((channel) => ({
        name: channel.name,
        position: channel.position,
        type: channel.type,
      })),
      roles: message.guild.roles.cache.map((role) => ({
        name: role.name,
        permissions: role.permissions.toArray(),
      })),
      voiceChannels: message.guild.channels.cache.filter((channel) => channel.type === 'voice').map((voiceChannel) => ({
        name: voiceChannel.name,
        position: voiceChannel.position,
      })),
    };

    // Get the Discord server's name and use it as the file name
    const fileName = `${message.guild.name}.json`;

    // Save the server data to the SERVER folder
    const filePath = `./SERVER/${fileName}`;
    fs.writeFileSync(filePath, JSON.stringify(serverData, null, 2));

    console.log(`Server data for ${message.guild.name} saved successfully in ${fileName}!`);
  }
};

// Function to create a new server from saved data
// Inside the createServerFromData function
// Inside the createServerFromData function
const createServerFromData = async (message, client) => {
  const prefix = fs.readFileSync('./prefix.txt', 'utf8').trim();
  const cloneCommand = 'svc'; // New command for creating a server from saved data
  if (message.content.startsWith(`${prefix}${cloneCommand}`)) {
    // Extract the server name from the command
    const args = message.content.split(' ');
    const serverName = args.slice(1).join(' ');

    if (!serverName) {
      // If server name is not provided, send a message notifying the user
      message.channel.send("Please provide a valid server name.");
      return;
    }

    const fileName = `${serverName}.json`;
    const filePath = `./SERVER/${fileName}`;

    try {
      const savedData = JSON.parse(fs.readFileSync(filePath, 'utf8'));

      // Create a new server using the savedData
      const createdServer = await client.guilds.create(serverName);
      console.log(`Created server: ${createdServer.name} (${createdServer.id})`);

      // Logic to set up channels, roles, etc., using savedData
      // Note: This is a basic example; customize it based on your needs

      message.channel.send(`Server ${serverName} created successfully from saved data!`);
      console.log(`Server ${serverName} created successfully from saved data!`);
    } catch (error) {
      console.error(`Error reading or parsing file ${fileName}: ${error.message}`);
    }
  }
};


module.exports = { saveServerData, createServerFromData };