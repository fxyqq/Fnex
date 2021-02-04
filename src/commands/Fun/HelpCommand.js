const BaseCommand = require('../../utils/structures/BaseCommand');
const Discord = require("discord.js");

module.exports = class HelpCommand extends BaseCommand {
  constructor() {
    super('Help', 'Fun', []);
  }

  async run(client, message, args) {
    const helpembed = new Discord.MessageEmbed()
      .setTitle(`Help Tab`)
      .addFields({
        name: `Fun Commands `,
        value: `F!Howgay`,
        inline: true,
      
      },
      {
        name: `Fun Commands`,
        value: `F!Botinfo`,
        inline: true,
      
      },
      {
        name: `Fun Commands`,
        value: `F!Say`,
        inline: true,
      
      },
      {
        name: `'`,
        value: `F!Whois`,
        inline: true,
      
      },{
        name: `'`,
        value: `F!Help`,
        inline: true,
      
      },{
        name: `'`,
        value: `F!Getstickbugged`,
        inline: true,
      
      },
      {
        name: `'`,
        value: `F!Myppsize`,
        inline: true,
      
      },
      {
        name: `'`,
        value: `F!Nou`,
        inline: true,
      
      }
      ,{
        name: `'`,
        value: `F!Popcat`,
        inline: true,
      
      },{
        name: `'`,
        value: `F!Say`,
        inline: true,
      
      },{
        name: `'`,
        value: `F!Anouce`,
        inline: true,
      
      },
      {
        name: `'`,
        value: `F!Avatar`,
        inline: true,
      
      },
      {
        name: `'`,
        value: `F!Nickname`,
        inline: true,
      
      },{
        name: `Modration`,
        value: `F!Ban`,
        inline: true,
      
      },
      {
        name: `'`,
        value: `F!Warn`,
        inline: true,
      
      },
      {
        name: `'`,
        value: `F!Mute`,
        inline: true,
      
      },{
        name: `Modration`,
        value: `F!Kick`,
        inline: true,
      
      },{
        name: `'`,
        value: `F!Purge`,
        inline: true,
      
      },{
        name: `'`,
        value: `F!Unban`,
        inline: true,
      
      })
      .setFooter(`Fnex bot | Help | Need Support? Join Our Discord Server | https://discord.gg/pnZVuWKcfv`)
      .setColor(`#00ffae`)
      .setTimestamp()
      
    await message.channel.send(helpembed);
  } 
}