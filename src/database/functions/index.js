'use strict';

module.exports = (client) => {
  require('./functionGuild')(client);
  require('./functionUser')(client);
};