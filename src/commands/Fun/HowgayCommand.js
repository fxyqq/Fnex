const BaseCommand = require('../../utils/structures/BaseCommand');
const Discord = require("discord.js");

module.exports = class HowgayCommand extends BaseCommand {
  constructor() {
    super('Howgay', 'Fun', []);
  }

  async run(client, message, args) {
    const gayembed = new Discord.MessageEmbed()
     .setAuthor(`Gay Checker`)
     .setDescription(`🏳️‍🌈 Your Gay Status: ` + Math.floor(Math.random() * 100 + 1) + "%")
     .setColor("#d900ff")
     .setTimestamp()
     try {
       message.channel.send(gayembed);
     } catch (err) {
       console.log(err);
     }
  }
}