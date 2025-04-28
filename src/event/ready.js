const { prefix } = require("../../config");

module.exports = async (client) => {
    client.logger.info(`[!] ${client.user.username} is ready for deployment...`)
    client.logger.info(`[!] Successfully loaded ${client.commandes.size} commands and ${client.slash.size} (/) commands`)
    client.user.setActivity(`${prefix}help | github.com/TunxxVN`, { type: 'PLAYING' })
};
