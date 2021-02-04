const BaseCommand = require('../../utils/structures/BaseCommand');

module.exports = class GiveawayCommand extends BaseCommand {
  constructor() {
    super('Giveaway', 'Fun', []);
  }

  run(client, message, args) {
    message.channel.send('Giveaway command works');
  }
}