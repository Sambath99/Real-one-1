const Discord = require('discord.js-selfbot-v13');

module.exports = function configureRichPresence() {
    const richPresence = new Discord.RichPresence()
        .setApplicationId('1099642415754776628')
        .setType('PLAYING')
        .setURL('https://www.youtube.com/channel/UCYvGMEkXftp8u6El8HyVayw')
        .setState('🚀 Connecting for work')
        .setName('💻   WEB Developer')
        .setDetails('💡 Web Developer in HTML, CSS, JS, JSX, React, TypeScript, Ruby, Python, PHP, Node.js, Java, C++, Pawn, Lua')
        .setAssetsLargeImage('https://cdn.discordapp.com/attachments/1090901496335441990/1112386293532459150/Axo_Official.png')
        .setAssetsLargeText('🌟 Visit this')
        .setAssetsSmallImage('https://cdn.discordapp.com/emojis/1101758417720328203.webp?size=96&quality=lossless')
        .setAssetsSmallText('✅ Verified')
        .addButton('🚀 My Project', 'https://www.youtube.com/channel/UCYvGMEkXftp8u6El8HyVayw')
        .addButton('📞 Telegram', 'https://t.me/HELLoiamyou');

    return richPresence;
};
