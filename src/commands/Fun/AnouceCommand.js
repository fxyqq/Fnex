const BaseCommand = require('../../utils/structures/BaseCommand');
const Discord = require("discord.js");

module.exports = class AnouceCommand extends BaseCommand {
  constructor() {
    super('Anouce', 'Fun', []);
  }

  run(client, message, args) {
    const permisionembed = new Discord.MessageEmbed()
    .setTitle("Something Went Wrong")
    .setDescription('You Dont Have **Permission** To Do that')
    .setColor("RED")
   const embedwrong = new Discord.MessageEmbed()
    .setTitle("Something Went Wrong")
    .setDescription('I Dont Have **Permission** To Do that')
    .setColor("RED")
    const embedd = new Discord.MessageEmbed()
    .setTitle("Something Went Wrong")
    .setDescription('You Need To **State** a User To Ban.')
    .setColor("RED")
    const Notin = new Discord.MessageEmbed()
    .setTitle("Something Went Wrong")
    .setDescription('The User Stated Is **Not** In The Server.')
    .setColor("RED")
    const nonick = new Discord.MessageEmbed()
    .setTitle("Something Went Wrong")
    .setColor("RED")
    const went = new Discord.MessageEmbed()
    .setTitle("Something Went Wrong")
    .setDescription('Something Went Wrong')
    .setColor("RED")
    if (!message.member.hasPermission("MANAGE_MESSAGES","ADMINISTRATOR")) return message.channel.send(permisionembed)
    let argsresult;
    let Mchannel = message.mentions.channels.first()
    message.delete()
    if (Mchannel) {
      argsresult = args.slice(1).join(" ");
      Mchannel.send(argsresult)
    } else {
      argsresult = args.join(" ")
      message.channel.send(argsresult)

    }
  }
}