const { Client, ChatInputCommandInteraction, EmbedBuilder } = require('discord.js');

module.exports = {
    name: 'interactionCreate',
    /**
     *
     * @param { ChatInputCommandInteraction } interaction intraction create imp
     * @param { Client } client client use
     */
    async run(interaction, client) {
        if (interaction.isChatInputCommand()) {
            const command = client.commands.get(interaction.commandName);

            if (!command) {
                return interaction.reply({
                    embeds: [
                        new EmbedBuilder()
                            .setColor('Random')
                            .setDescription(` This Command is Outdated.`)
                    ],
                    ephemeral: true
                }) && client.commands.delete(interaction.commandName);
            }

            command.run(interaction, client);
        }
    }
};
