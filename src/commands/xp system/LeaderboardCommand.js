const BaseCommand = require('../../utils/structures/BaseCommand');
const Levels = require('discord-xp');
const Discord = require('discord.js');


module.exports = class LeaderboardCommand extends BaseCommand {
  constructor() {
    super('Leaderboard', 'xp system', []);
  }

  async run(client, message, args) {
    const rawLeaderboard = await Levels.fetchLeaderboard(message.guild.id, 5);
    if (rawLeaderboard.length < 1) return reply("Nobody's in leaderboard yet.");

    const leaderboard = Levels.computeLeaderboard(bot, rawLeaderboard);

    const lb = leaderboard.map(e => `${e.position}. ${e.username}#${e.discriminator}\nLevel: ${e.level}\nXP: ${e.xp.toLocaleString()}`);

    message.channel.send(`${lb.join("\n\n")}}`)
  }
}