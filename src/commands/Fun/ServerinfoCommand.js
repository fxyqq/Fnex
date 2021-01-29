const BaseCommand = require('../../utils/structures/BaseCommand');
const Discord = require("discord.js");

module.exports = class ServerinfoCommand extends BaseCommand {
  constructor() {
    super('Serverinfo', 'Fun', []);
  }

  async run(client, message, args) {
    const infoembed = new Discord.MessageEmbed()
     .setTitle(`Server Info`)
     .setColor("CYAN")
     .addField(`**Guild Name: **`, `${message.guild.name}`, true)
     .addField(`**Guild Owner: **`, `${message.guild.owner}`, true)
     .addField(`**Member Count: **`, `${message.guild.memberCount}`, true)
     .addField(`**Role Count: **`, `${message.guild.roles.size}`, true)
     .setFooter(`Fnex Bot | Server Info`)
     .setTimestamp()
    await message.channel.send(infoembed);
  }
}