const BaseCommand = require('../../utils/structures/BaseCommand');


module.exports = class MusicCommand extends BaseCommand {
  constructor() {
    super('Music', 'Fun', []);
  }

  run(client, message, args) {
    message.channel.send('Music command works');
  }
}