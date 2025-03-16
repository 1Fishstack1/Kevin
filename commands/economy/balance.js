const { ApplicationCommandOptionType } = require('discord.js');
const UserProfile = require('../../schemas/UserProfile');

module.exports = {
    run: async ({ interaction }) => {
        if (!interaction.inGuild()) {
            interaction.reply({
                content: "This command can only be executed inside a server.",
                ephemeral: true,
            });
            return;
        }

        const targetUserId = interaction.options.getUser('target-user')?.id  || interaction.user.id;

        await interaction.deferReply();

        try {
            let userProfile = await UserProfile.findOne({ userId: targetUserId });

            if (!userProfile) {
                userProfile = new UserProfile({ userId: targetUserId });
            } 

            interaction.editReply(
                targetUserId === interaction.user.id ? `You have **${userProfile.balance} Dabloons**.\nhttps://cdn.discordapp.com/attachments/1136659595717247047/1136709233132449893/download_9.jpg` : `<@${targetUserId}> has **${userProfile.balance} Dabloons**.\nhttps://cdn.discordapp.com/attachments/1136659595717247047/1136709233132449893/download_9.jpg`
            );
        }   catch (error) {
            console.log(`Error handling /balance: ${error}`);
        }
    },

    data: {
        name: 'balance',
        description: "Check a persons Dabloons.",
        options: [
            {
                name: 'target-user',
                description: "The user whose Dabloons you want to see.",
                type: ApplicationCommandOptionType.User,
            }
        ]
    }
}