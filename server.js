//import dotemv
require('dotenv').config();
// bot prefix
const prefix = "!";
const { Client, GatewayIntentBits } = require('discord.js');
const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
    GatewayIntentBits.GuildMembers,
  ],
});

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on("messageCreate", async (message) => {
  if (!message.content.startsWith(prefix) || message.author.bot) return;
  if (message.content.startsWith(`${prefix}ping`)) {
    message.channel.send('pong');
  } else
    if (message.content.startsWith(`${prefix}start`)) {
      message.channel.send('**Welcome to Open Source Chandigarh, Let us start your OpenSource journey!.** \n_About OSC_ :- \n\n*The Open-Source Chandigarh community, powered by Chitkara University, has been started with the vision to create a rich demographic of open-source practitioners in the Tricity. GitHub India, Apache Community Initiatives, Docker Inc. and OpsTree are the community partners of Open-Source Chandigarh community who will be supporting this initiative.* \n\nVisit the repository for more instructions: https://github.com/Open-Source-Chandigarh ');
    } else
      if (message.content.startsWith(`${prefix}social`)) {
        message.channel.send('*Follow OSC on your favourite platform for regular updates on what\'s hot in OpenSource* \n*LinkedIn:* https://www.linkedin.com/company/open-source-chandigarh/  \n*GitHub:* https://github.com/Open-Source-Chandigarh \n*Twitter:* https://twitter.com/OSChandigarh  ');
      }

})

client.login(process.env.TOKEN)