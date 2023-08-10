'use strict';

/**
 * funded-project service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::funded-project.funded-project');
