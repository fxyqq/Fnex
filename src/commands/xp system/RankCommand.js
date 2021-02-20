const BaseCommand = require('../../utils/structures/BaseCommand');
const Discord = require('discord.js');
const Canvacord = require(`canvacord`)
const db = require(`quick.db`);
const canvacord = require('canvacord');



module.exports = class RankCommand extends BaseCommand {
  constructor() {
    super('Rank', 'xp system', []);
  }

  async run(client, message, args) {

    var user = message.mentions.users.first() || message.author

    var level = db.get(`guild_${message.guild.id}_level_${user.id}`) || 0
    level = level.toString()
    let xp = db.get(`guild_${message.guild.id}_xp_${message.author.id}`) || 0

    var xpNeeded = level * 500 + 500
    let every = db
      .all()
      .filter(i => i.ID.startsWith(`guild_${message.guild.id}_xptotal_`))
      .sort((a, b) => b.data - a.data)

    var rank = every.map(x => x.ID).indexOf(`guild_${message.guild.id}_xptotal_${message.author.id}`) + 1
    rank = rank.toString()
    const one = new canvacord.Rank()
      .setAvatar(message.author.displayAvatarURL({ dynamic: false, format: "png"}))
      .setCurrentXP(xp.toString())
      .setRequiredXP(xpNeeded.toString())
      .setStatus(message.author.prefence.status)
      .setProgressBar(`RED` ,'COLOR')

    return message.channel.send(new Discord.MessageAttachment(img, "rank.png"))


  }
}

function xp(message) {
  const randomnumber = Math.floor(Math.random() * 10) + 15
  db.add(`guild_${message.guild.id}_xp_${message.author.id}`, randomnumber)
  db.add(`guild_${message.guild.id}_xptotal_${message.author.id}`, randomNumber)

  var level = db.get(`guild_${message.guild.id}_level_${message.author.id}`) || 1
  var xp = db.get(`guild_${message.guild.id}_xp_${message.author.id}`)
  var xpNeeded = level * 500
  if (xpNeeded < xp) {
    var newlevel = db.add(`guild_${message.guild.id}_xp_${message.author.id}`, 1)
    db.subtract(`guild_${message.guild.id}_xp_${message.author.id}`, xpNeeded)
    message.channel.send(`:tada: | **${message.author.username}**leveled up!`)
  }
}