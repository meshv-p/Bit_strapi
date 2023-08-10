'use strict';

/**
 * latest-patent service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::latest-patent.latest-patent');
