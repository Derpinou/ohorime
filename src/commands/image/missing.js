'use strict';
const Command = require('../../plugin/Command');
const language = require('../../i18n');
const arisia = new (require('node-arisia'))({
  version: 1,
  token: require('./../../../configuration').ARISIA.token,
});

/**
 * Command class
 */
module.exports = class Missing extends Command {
  /**
   * @param {Client} client - Client
   */
  constructor(client) {
    super(client, {
      name: 'missing',
      category: 'image',
      description: 'command_missing_description',
      usage: 'missing (mentions)',
      nsfw: false,
      enable: false,
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
    const queryMember = query.join(' ');
    const member = message.mentions.members.first() ||
        message.guild.member(
            message.mentions.users.first(),
        ) ||
        message.guild.members.cache.find((member) =>
          member.id === queryMember) ||
        message.guild.members.cache.find((member) =>
          member.displayName === queryMember) ||
        message.guild.members.cache.find((member) =>
          member.user.username === queryMember) ||
        message.guild.members.cache.find((member) =>
          member.toString() === queryMember) ||
        message.member;
    const image = await arisia.generation.missing({
      url: member.user.displayAvatarURL({
        format: 'png',
      }),
    });
    return message.channel.send({
      embed: {
        color: guild.color,
        title: 'Missing',
        description:
          `[${language(guild.lg, 'command_img_notShow')}](${image.url})`,
        image: {
          url: image.url,
        },
      },
    });
  };
};
