const BaseCommand = require('../../utils/structures/BaseCommand');
const Discord = require("discord.js");


module.exports = class AvatarCommand extends BaseCommand {
  constructor() {
    super('Avatar', 'Fun', []);
  }

  async run(client, message, args) {
    let mentioneduser = message.mentions.users.first();
   
     try {
       message.channel.send(mentioneduser.displayAvatarURL());
     } catch (err) {
       console.log(err);
     }
  }
}