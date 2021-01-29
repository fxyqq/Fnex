const BaseCommand = require('../../utils/structures/BaseCommand');
const discord = require("discord.js");

module.exports = class SayCommand extends BaseCommand {
  constructor() {
    super('Say', 'Fun', []);
  }

  async run(client, message, args) {
    const messagetosay = args.join(" ");
    const sayembed = new discord.MessageEmbed()
      .setDescription(` ${messagetosay}`)
      .setFooter("Fnex Bot");
    try {
      await message.channel.send(sayembed);
      message.delete();
    } catch (err){
      console.log(err);
      message.channel.send("Something Went Wrong.");
    }
  }
}