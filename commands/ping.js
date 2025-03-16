module.exports = {
    data: {
        name: 'ping',
        description: 'Replies with Pong!'
    },

    run: ({ interaction }) => {
        interaction.reply('https://cdn.discordapp.com/attachments/1083752938243100762/1136664700973756446/image0.gif');
    },
};