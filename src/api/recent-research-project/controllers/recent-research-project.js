"use strict";

/**
 * recent-research-project controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController(
  "api::recent-research-project.recent-research-project",

  {
    find: async (ctx) => {
      console.log(ctx);
      // Check if the user has the required role (cs_dep)
      if (!ctx.state.user) {
        return ctx.forbidden("You are not authorized to access this resource.");
      }

      let filter = {}; // Initialize an empty filter

      // Apply filtering logic based on user's role
      if (ctx.state.user.roles.includes("cs_d")) {
        filter.branch = "Computer Science and Enginerring";
      }
      // Add more conditions for other roles if needed

      // Retrieve records based on the filter
      const projects = await strapi.services["recent-research-project"].find(
        filter
      );

      return projects;
    },
  }
);
