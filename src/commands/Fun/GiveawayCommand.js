const BaseCommand = require('../../utils/structures/BaseCommand');
const Discord = require("discord.js");
const ms = require('ms')

module.exports = class GiveawayCommand extends BaseCommand {
  constructor() {
    super('Giveaway', 'Fun', []);
  }

  async run(client, message, args) {
    if(message.member.permissions.has('ADMINISTRATOR')){
          let time = args[1]
          if (!time) return message.channel.send('You did not specify a time!');
  
          if (
              !args[1].endsWith("d","D") &&
              !args[1].endsWith("h","H") &&
              !args[1].endsWith("m","M") &&
              !args[1].endsWith("s","S") 
          )
              return message.channel.send('You need to use d (days), h (hours), m (minutes), or s (seconds)')
  
              let gchannel = message.mentions.channels.first();
              if (!gchannel) return message.channel.send("I can't find that channel in the server!")
  
              let prize = args.slice(3).join(" ")
              if (!prize) return message.channel.send('Arguement missing. What is the prize?')
  
              message.delete()
              gchannel.send(":tada: **NEW GIVEAWAY** :tada:")
              let gembed = new Discord.MessageEmbed()
                  .setTitle("New Giveaway!")
                  .setDescription(`React with :tada: to enter the giveaway!\nHosted By: **${message.author}**\nTime: **${time}**\nPrize: **${prize}**`)
                  .setTimestamp(Date.now + ms(args[1]))
                  .setColor(3447003)
              let n = await gchannel.send(gembed)
              n.react("🎉")
              setTimeout(() => {
                  if(n.reactions.cache.get("🎉").count <= 1) {
                      return message.channel.send("Not enough people for me to draw a winner!")
                  }
  
                  let winner = n.reactions.cache.get("🎉").users.cache.filter((u) => !u.bot).random();
                  gchannel.send(`Congratulations ${winner}! You just won the **${prize}**!`
                  );
              }, ms(args[1]));
    }
  }
}