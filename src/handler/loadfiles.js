const { Client } = require("discord.js");
const { promisify } = require('util');
const glob = promisify(require('glob'));

module.exports = async (client) => {

    const eventfiles = await glob(`${process.cwd().replace(/\\/g, '/')}/src/events/**/*.js`);
    eventfiles.forEach((file) => {
        require.resolve(file);
    });

    eventfiles.forEach((file) => {
        const event = require(file);
        if (!event?.name) return console.log(` ${file} name should be as event name which discord support`);
        if (!event?.run) return console.log(` ${file} this event does not have run function`);
        
        // new
        const run = (...args) => event.run(...args, client);
        client.events.set(event.name, run);

        // new end

        if (event.once) {
            client.once(event.name, run);
        } else {
            client.on(event.name, run);
        }


    });
    console.log(`${eventfiles.length} Events Loaded`);
};