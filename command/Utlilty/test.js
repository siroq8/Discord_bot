const discord = require('discord.js');
const { MessageEmbed } = require('discord.js');
const prefix = require('../../config.json').prefix;

module.exports = {
    name: 'test',
    aliases: [],
    description: 'test command if the bot work or no!',

    run: async (client, message, args, PREFIX) => {
        const testEmbed = new MessageEmbed()
        .setAuthor(client.user.username, client.user.displayAvatarURL())
        .setColor('GREEN')
        .setDescription(`Test command it's Working!`)
        .setTimestamp()
        .setFooter(`Request By : ${client.user.username}!`)
        message.channel.send(testEmbed)
    }
}
