const BaseCommand = require('../../utils/structures/BaseCommand');
const Discord = require("discord.js");

module.exports = class InfoCommand extends BaseCommand {
  constructor() {
    super('Info', 'Fun', []);
  }

  async run(client, message, args) {
    const serverIn = await client.guilds.cache.size;

    const infoembed = new Discord.MessageEmbed()
      .addField(`**Servers**:`, ` ${serverIn}`)
      .addField("Made By", `Xnvyy#8872`)
      .addField(`Status:`,`Updating!`)
      .setColor("#034efc");
      try {
        message.channel.send(infoembed);
      } catch {
        console.log("Something Went Wrong");
      }

  }
}