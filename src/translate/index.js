'use strict';
const allLanguage = {
  'en': require('./en'),
};

/**
 * Search translate
 * @function
 * @param {string} lg - Language
 * @param {string} query - Query
 * @return {string}
 */
module.exports = (lg, query) =>
  allLanguage[String(lg)] ?
  allLanguage[String(lg)].search(query) ||
    `translate not found\n**lg:** ${lg}\n**query:** ${query}` :
  'No translate';