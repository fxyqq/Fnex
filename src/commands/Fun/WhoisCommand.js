const BaseCommand = require('../../utils/structures/BaseCommand');
const Discord = require("discord.js");



module.exports = class WhoisCommand extends BaseCommand {
  constructor() {
    super('Whois', 'Fun', []);
  }

  async run(client, message, args) {
    let mentionedmember = message.mentions.members.first();
    let mentioneduser = message.mentions.users.first();
    if (!args[0]) return message.channel.send(`You Need To **State** a User.`); 
   
    const embed = new Discord.MessageEmbed()
     .setTitle(`${mentioneduser.tag} Stats`, true)
     .setColor(`#f3f3f3`)
     .setThumbnail(mentioneduser.displayAvatarURL())
     .addField("Username: ", `${mentioneduser.username}`, true)
     .addField(`UserID: `, `${mentioneduser.id}`)
     .addField(`Account Created:`, `${mentioneduser.createdAt}`, true)
     .addField(`Joined The Server: `, `${mentionedmember.joinedAt}`, true)
     


    await message.channel.send(embed)
  }
}