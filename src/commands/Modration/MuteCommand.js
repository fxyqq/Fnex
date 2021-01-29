const BaseCommand = require('../../utils/structures/BaseCommand');
const Discord = require("discord.js");

module.exports = class MuteCommand extends BaseCommand {
  constructor() {
    super('Mute', 'Modration', []);
  }

  async run(client, message, args) {
    if (!message.member.hasPermission("MUTE_MEMBERS")) return message.channel.send("You Dot Have Permission To Do that");
    if (!message.guild.mew.hasPermission("MANAGE_ROLES")) return message.channel.send("I Dont Have Permission.");

    const muterole = message.guild.roles.cache.get();
    const memberrole = message.guild.roles.cache.get();
    const mentionedMember = message.mentions.member.first() ||  message.guild.members.cache.get(args[0]);
    const muteembed = new Discord.MessageEmbed()
      .setTitle(`You Have Been Muted From ${message.guild.name}`)
      .setDescription(`For: ${reason}`)
      .setTimestamp();
  }
}