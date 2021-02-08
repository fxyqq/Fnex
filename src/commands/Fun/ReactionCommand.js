const BaseCommand = require('../../utils/structures/BaseCommand');
const Discord = require("discord.js");
const client = new Discord.Client({
  partials: ["MESSAGE", "CHANNEL", "REACTION"]
});
const fs = require('fs');



module.exports = class ReactionCommand extends BaseCommand {
  constructor() {
    super('Reaction', 'Fun', []);
  }


  async run(client, message, args) {
    

  }

}