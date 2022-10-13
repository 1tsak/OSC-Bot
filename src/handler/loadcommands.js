const { Client } = require("discord.js");
const { promisify } = require('util');
const glob = promisify(require('glob'));


/**
 * @param {Client} client
 */
module.exports = async (client) => {

    // Events
    const commandsFiles = await glob(`${process.cwd().replace(/\\/g, '/')}/src/commands/**/*.js`);
    commandsFiles.forEach((file) => {
        require.resolve(file);
    });

    const arrayOfSlashCommands = [];
    commandsFiles.forEach((value) => {
        const file = require(value);
        if (!file?.name) return console.log(` ${value} name not provided`);
        if (!file?.description) return console.log(` ${value} desc not provided`);
        if (!file?.run) return console.log(` ${value} this event does not have run function`);
        
        
        
        client.commands.set(file.name, file);
        arrayOfSlashCommands.push(file);

    });
    client.application.commands.set(arrayOfSlashCommands);  // global slash cmd, this take time to load / add cmd to all guild 

    //  add PRIVATEGUILD=guildid  to .env file and add that to config on index.js(/src/index.js)
    // only for one server  ( loadcommands instently  )

    // get private guild
    // const privateguild = client.guilds.cache.get(client.config.PRIVATEGUILD);  
    // privateguild.commands.set(developerArray);  // set cmd to private guild


    console.log(`${arrayOfSlashCommands.length}  Commands loaded `);

};