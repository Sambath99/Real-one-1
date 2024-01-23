// info.js
function getRichPresence() {
  return {
    applicationId: '1099642415754776628', // Include your application ID here
    type: 'PLAYING',
    url: 'https://www.youtube.com/channel/UCYvGMEkXftp8u6El8HyVayw',
    state: '🚀 Contact for work',
    name: '💻 WEB Developer',
    details: '💡 Web Developer in HTML, CSS, JS, React, TypeScript, Ruby, Python, PHP, Node.js, Java, C++, Pawn, Lua',
    assets: {
      largeImage: 'https://cdn.discordapp.com/attachments/1090901496335441990/1112386293532459150/Axo_Official.png',
      largeText: '🌟 Visit this',
      smallImage: 'https://cdn.discordapp.com/emojis/1101758417720328203.webp?size=96&quality=lossless',
      smallText: '✅ Verified',
    },
    buttons: [
      { label: '🚀 My Project', url: 'https://github.com/Sambath99' },
      { label: '📞 Telegram', url: 'https://t.me/HELLoiamyou' },
    ],
  };
}

module.exports = { getRichPresence };
