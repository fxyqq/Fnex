const BaseCommand = require('../../utils/structures/BaseCommand');

module.exports = class UnmuteCommand extends BaseCommand {
  constructor() {
    super('Unmute', 'Modration', []);
  }

  run(client, message, args) {
    message.channel.send('Unmute command works');
  }
}