const Discord = require("discord.js");
const discord = require("discord.js");
const kingman = require("./Alive/keep.js")
const { MessageEmbed  ,  Collection , Client } = require("discord.js");
const client = new Client({ partials: ['MESSAGE', 'CHANNEL', 'REACTION'] })
client.commands = new discord.Collection();
client.eventss = new discord.Collection();
client.aliases = new discord.Collection();
kingman();
const TOKEN_BOT = process.env['ME_TOKEN']
const config = require('./config.json');
const PREFIX = config.prefix
client.on("error", console.error);
["command", "events"].forEach(siro => {
  require(`./handler/${siro}`)(client);
});
client.on('message', message => {
  const pmention = new RegExp(`^<@!?${client.user.id}>( |)$`);
  if (message.content.match(pmention)) {
    return message.reply(`**MY PREFIX IS: ${PREFIX}**`)
  }
  if (message.author.bot) return;
  if (!message.guild) {
    return message.reply("**ONLY WORK ON SERVERS NOT DM**")
  }
  let prefix = PREFIX;
const args1 = message.content.slice(prefix.length).split(/ +/);
  if (!message.content.startsWith(PREFIX)) return;
  const args = message.content
    .slice(PREFIX.length)
    .trim() 
    .split(/ +/g); 
  const command = args.shift().toLowerCase();
  if (command.length === 0) return;
  let code = client.commands.get(command);
  if (!code) code = client.commands.get(client.aliases.get(command));
  if (code) code.run(client, message, args, PREFIX , prefix);
});


client.login(TOKEN_BOT);
