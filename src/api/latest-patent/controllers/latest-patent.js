'use strict';

/**
 * latest-patent controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::latest-patent.latest-patent');
