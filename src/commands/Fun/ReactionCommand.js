const BaseCommand = require('../../utils/structures/BaseCommand');
const Discord = require("discord.js");

module.exports = class ReactionCommand extends BaseCommand {
  constructor() {
    super('Reaction', 'Fun', []);
  }

  async run(client, message, args) {
    const reactionembed = new Discord.MessageEmbed()
      .setTitle("Reaction Roles")
      .setDescription('React To Get The Roles!')
      .setColor("RED")
    await message.channel.send(reactionembed)
    message.react('👍')

  }
}