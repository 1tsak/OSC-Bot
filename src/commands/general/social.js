const { Client, EmbedBuilder, ChatInputCommandInteraction } = require('discord.js');

module.exports = {
    name: 'social',
    description: 'Socials',
    /**
     * @param {ChatInputCommandInteraction} interaction intractions
     * @param {client} client client
     * @param {EmbedBuilder} EmbedBuilder embed bind
     */
    run(interaction) {
        try {
            interaction.channel.sendTyping();

            const startembed = new EmbedBuilder()
                .setColor('Random')
                .setAuthor({
                    name: `${interaction.guild.name}`,
                    iconURL:
                    `${interaction.guild.iconURL? 'https://cdn.discordapp.com/attachments/884202202001569812/884202233201268766/unknown.png':interaction.guild.iconURL({ dynamic: true, size: 512 })}`
                })
                .setTitle(`Socials`)
                .setDescription(
                    `**Follow OSC on your favourite platform for regular updates on what\'s hot in OpenSource**
                    \n**LinkedIn:** https://www.linkedin.com/company/open-source-chandigarh/
                    \n**GitHub:** https://github.com/Open-Source-Chandigarh
                    \n**Twitter:** https://twitter.com/OSChandigarh`
                )
                .setFooter({ text: `${interaction.user.username}`, iconURL:  `${interaction.guild.iconURL? 'https://cdn.discordapp.com/attachments/884202202001569812/884202233201268766/unknown.png':interaction.guild.iconURL({ dynamic: true})}` })
                .setTimestamp();
            interaction.reply({ embeds: [startembed] });
            console.log(`/start by ${interaction.user}`);
        } catch (error) {
            console.log(error);
        }
    }
};
