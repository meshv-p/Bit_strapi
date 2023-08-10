'use strict';

/**
 * latest-patent router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::latest-patent.latest-patent');
