/* eslint-disable no-process-env */
const { Client, Collection, GatewayIntentBits, Partials } = require('discord.js');
const { Guilds, GuildMembers, GuildMessages, MessageContent, GuildMessageTyping } = GatewayIntentBits;
const { User, Message, GuildMember } = Partials;

require('dotenv/config');
const config = {
    TOKEN: process.env.TOKEN,
    // PRIVATEGUILD:process.env.PRIVATEGUILD
};

const client = new Client({
    intents: [
        Guilds,
        GuildMembers,
        GuildMessages,
        MessageContent,
        GuildMessageTyping
    ],
    partials: [
        User,
        Message,
        GuildMember,
    ]
});


client.commands = new Collection();
client.events = new Collection();
client.config = config;


client.login(config.TOKEN)
    .then(() => {
        require('./handler/loadcommands')(client);
        require('./handler/loadfiles')(client);

    })
    .catch((err) => {
        console.log(err)
    });
