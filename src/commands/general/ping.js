const { Client, EmbedBuilder, ChatInputCommandInteraction } = require('discord.js');

module.exports = {
    name: 'ping',
    description: 'Check ping of bot',
    /**
     * @param {ChatInputCommandInteraction} interaction intractions
     * @param {client} client client
     * @param {EmbedBuilder} EmbedBuilder embed bind
     */
    run(interaction) {
        try {
            interaction.channel.sendTyping();
            const pingLatency = Date.now() - interaction.createdTimestamp;
            const apiLatency = Math.round(`${interaction.client.ws.ping}`);
            const pingembed = new EmbedBuilder()
                .setColor('Random')
                .setAuthor({
                    name: `${interaction.guild.name}`,
                    iconURL:
                        `${interaction.guild.iconURL({ dynamic: true, size: 512 })}`
                })
                .setTitle(`Bot Ping`)
                .addFields(
                    { name: 'Ping Latency', value: `\`${pingLatency} ms\`` },
                    { name: 'API Latency', value: `\`${apiLatency} ms\`` }
                )
                .setFooter({ text: `${interaction.user.username}`, iconURL: `${interaction.guild.iconURL({ dynamic: true })}` })
                .setTimestamp();
            interaction.reply({ embeds: [pingembed] });

            console.log(`/ping by ${interaction.user}`);

        } catch (error) {
            console.log(error);
        }
    }
};
