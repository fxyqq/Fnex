const BaseCommand = require('../../utils/structures/BaseCommand');
const Discord = require("discord.js");

module.exports = class HelpCommand extends BaseCommand {
  constructor() {
    super('Help', 'Fun', []);
  }

  async run(client, message, args) {
    const helpembed = new Discord.MessageEmbed()
      .setTitle(`Help Tab`)
      .addField(`Fun Commands`, `F!Howgay`, true)
      .addField(`Fun Commands`,`F!Info`, true)
      .addField(`Fun Commands`,`F!Say`, true)
      .addField(`Fun Commands`,`F!Whois`, true)
      .addField(`Fun Commands`,`F!Help`, true)
      .addField(`Fun Commands`,`F!Getstickbugged`, true)
      .addField(`Fun Commands`,`F!Myppsize`, true)
      .addField(`Fun Commands`,`F!Nou`, true)
      .addField(`Fun Commands`,`F!Popcat`, true)
      .addField(`Fun Commands`,`F!Say`, true)
      .addField(`Fun Commands`,`F!Serverinfo`, true)
      .addField(`Fun Commands`,`F!Anouce`, true)
      .addField(`Fun Commands`,`F!Avatar`, true)
      .addField(`Modration`,`F!Ban`, true)
      .addField(`Modration`,`F!Kick`, true)
      .addField(`Modration`,`F!Purge`, true)
      .addField(`Modration`,`F!Unban`, true)
      .setColor(`#00ffae`)
      .setTimestamp()
      
    await message.channel.send(helpembed);
  } 
}