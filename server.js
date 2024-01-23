const express = require('express');
const fs = require('fs');
const server = express();

server.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

server.get('/servers', (req, res) => {
  const serverList = [];

  // Read server files from the SERVER folder
  const serverFolder = './SERVER/';
  const serverFiles = fs.readdirSync(serverFolder);

  serverFiles.forEach(file => {
    const filePath = `${serverFolder}${file}`;
    const serverData = JSON.parse(fs.readFileSync(filePath, 'utf8'));
    serverList.push(serverData);
  });

  res.json(serverList);
});

function keepAlive() {
  server.listen(3000, () => {
    console.log("Server is Ready!!" + Date.now());
  });
}

module.exports = keepAlive;
