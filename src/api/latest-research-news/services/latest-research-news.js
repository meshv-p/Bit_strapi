'use strict';

/**
 * latest-research-news service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::latest-research-news.latest-research-news');
