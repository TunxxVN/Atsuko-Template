const { Client, Collection, GatewayIntentBits } = require("discord.js");
const client = new Client({
    allowedMentions: { parse: ['users', 'roles'] },
    fetchAllMembers: false,
    intents: [ GatewayIntentBits.Guilds, GatewayIntentBits.GuildMembers, GatewayIntentBits.GuildMessages, GatewayIntentBits.GuildMessageReactions, GatewayIntentBits.MessageContent ],
});

// collection
client.commandes = new Collection();
client.slash = new Collection();
client.aliases = new Collection();
cooldowns = new Collection();

// utils
client.logger = require('./src/utils/logger');
client.color = require('./src/utils/color.js');

// config
client.config = require('./config');

// handlers
["error", "command", "slashCommands", "event"].forEach(file => { require(`./src/utils/handlers/${file}`)(client) })

client.login(client.config.token); 