'use strict';
const Command = require('../../plugin/Command');
const language = require('../../i18n');
const {sfw} = new (require('nekos.life'))();

/**
 * Command class
 */
module.exports = class Gecg extends Command {
  /**
   * @param {Client} client - Client
   */
  constructor(client) {
    super(client, {
      name: 'gecg',
      category: 'image',
      description: 'command_gecg_description',
      usage: 'gecg',
      nsfw: false,
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
    const image = await sfw.gecg();
    return message.channel.send({
      embed: {
        color: guild.color,
        title: 'Gecg (genetically engineered catgirl)',
        description:
          `[${language(guild.lg, 'command_img_notShow')}](${image.url})`,
        image: {
          url: image.url,
        },
      },
    });
  };
};
