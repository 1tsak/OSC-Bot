const { ChatInputCommandInteraction, EmbedBuilder } = require('discord.js');

module.exports = {
    name: 'serverinfo',
    description: 'Display info about server',
    /**
     *
     * @param {ChatInputCommandInteraction} interaction intraction
     */
    async run(interaction) {
        try {
            interaction.channel.sendTyping();
            const serverembed = new EmbedBuilder()

                .setAuthor({
                    name: `Server info for ${interaction.guild.name}`,
                    iconURL:
                        `${interaction.guild.iconURL({ dynamic: true, size: 512 })}`
                })
                .setColor('Random')
                .setThumbnail(interaction.guild.iconURL({ dynamic: true, size: 512 }))
                .addFields(
                    {
                        name: 'General',
                        // eslint-disable-next-line max-len
                        value: `\n**Servername Name:** ${interaction.guild.name} \n**ID:** ${interaction.guild.id}`
                    },
                    {
                        name: 'Statistics',
                        // eslint-disable-next-line max-len
                        value: `\n** Role Count:** ${interaction.guild.roles.cache.size}\n**Member Count:** ${interaction.guild.memberCount}`
                    }
                )
                .setFooter({ text: `Requested by ${interaction.member.user.username}`, iconURL: interaction.guild.iconURL({ dynamic: true }) })
                .setTimestamp();
            interaction.reply({ embeds: [serverembed], ephemeral: false });
            console.log(`/Serverinfo command used by : ${interaction.member.user}`);
        } catch (error) {
            console.log(error);
        }
    }
};
