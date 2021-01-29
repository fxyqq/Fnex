const BaseCommand = require('../../utils/structures/BaseCommand');
const Discord = require("discord.js");


module.exports = class AvatarCommand extends BaseCommand {
  constructor() {
    super('Avatar', 'Fun', []);
  }

  async run(client, message, args) {
    let mentioneduser = message.mentions.users.first();
    const avatarembed = new Discord.MessageEmbed()
     .setImage(mentioneduser.displayAvatarURL())
     try {
       message.channel.send(avatarembed);
     } catch (err) {
       console.log(err);
     }
  }
}