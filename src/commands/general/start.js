const { Client, EmbedBuilder, ChatInputCommandInteraction } = require('discord.js');

module.exports = {
    name: 'start',
    description: 'Start',
    /**
     * @param {ChatInputCommandInteraction} interaction intractions
     * @param {client} client client
     * @param {EmbedBuilder} EmbedBuilder embed bind
     */
    run(interaction) {
        try {
            interaction.channel.sendTyping();
            console.log(interaction.guild.iconURL()==null);
            const startembed = new EmbedBuilder()
                .setColor('Random')
                .setAuthor({
                    name: `${interaction.guild.name}`,
                    iconURL:
                         `${interaction.guild.iconURL? 'https://cdn.discordapp.com/attachments/884202202001569812/884202233201268766/unknown.png':interaction.guild.iconURL({ dynamic: true, size: 512 })}`
                })
                .setTitle(`Get Started`)
                .setDescription(
                    `** Welcome to Open Source Chandigarh, Let us start your OpenSource journey!.** 
                    \n**_About OSC_** : - \n
                    \n  The Open - Source Chandigarh community, powered by Chitkara University, has been started with the vision to create a rich demographic of open - source practitioners in the Tricity.GitHub India, Apache Community Initiatives, Docker Inc.and OpsTree are the community partners of Open - Source Chandigarh community who will be supporting this initiative. \n
                    \nVisit the repository for more instructions: https://github.com/Open-Source-Chandigarh `
                )
                .setFooter({ text: `${interaction.user.username}`, iconURL:  `${interaction.guild.iconURL? 'https://cdn.discordapp.com/attachments/884202202001569812/884202233201268766/unknown.png':interaction.guild.iconURL({ dynamic: true })}` })
                .setTimestamp();
            interaction.reply({ embeds: [startembed] });
            console.log(`/start by ${interaction.user}`);
        } catch (error) {
            console.log(error);
        }
    }
};
