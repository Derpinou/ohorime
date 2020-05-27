'use strict';
const Command = require('../../plugin/Command');
const language = require('../../i18n');
const {nsfw} = new (require('nekos.life'))();

/**
 * Command class
 */
module.exports = class EroYuri extends Command {
  /**
   * @param {Client} client - Client
   */
  constructor(client) {
    super(client, {
      name: 'eroyuri',
      category: 'nsfw',
      description: 'command_eroyuri_description',
      usage: 'eroyuri',
      nsfw: true,
      enable: true,
      guildOnly: false,
      aliases: [],
      mePerm: ['EMBED_LINKS'],
    });
    this.client = client;
  };
  /**
   * @param {Message} message - message
   * @param {Array} query - query
   * @param {Object} options - options
   * @param {Object} options.guild - guild data
   * @return {Message}
   */
  async launch(message, query, {guild}) {
    const image = await nsfw.eroYuri();
    return message.channel.send({
      embed: {
        color: guild.color,
        title: 'eroYuri',
        description:
          `[${language(guild.lg, 'command_img_notShow')}](${image.url})`,
        image: {
          url: image.url,
        },
      },
    });
  };
};
