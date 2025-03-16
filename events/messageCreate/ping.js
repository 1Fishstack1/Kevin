module.exports = (message) => {
    // console.log(message);

    if (message.author.bot) return;

    if (message.content === 'wha-') {
        message.reply('https://tenor.com/view/meme-gif-23192656');
    }

    if (message.content === '<@1005208230164713513>') {
        message.reply('https://cdn.discordapp.com/attachments/1136659595717247047/1136665869825622086/20230801_002658.jpg');
    }
}