const fs = require('fs');

module.exports = async (client) => {
    const eventDirectory = `${__dirname}/../../event`;

    fs.readdir(eventDirectory + '/', (err, files) => {
        if (err) client.logger.error(err);
        files.forEach(file => {
            const event = require(`${eventDirectory}/${file}`);
            let eventName = file.split(".")[0];
            client.on(eventName, event.bind(null, client));
        });
        client.logger.loader(`${client.color.chalkcolor.yellow('[READY]')} ${files.length} events loaded`)
    });
}