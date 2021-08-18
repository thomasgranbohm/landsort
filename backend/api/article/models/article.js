"use strict";

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#lifecycle-hooks)
 * to customize this model
 */

const slugify = require("../../../functions/slugify");

const parseInput = (data) => {
	if (!data.title) return;
	data.slug = slugify(data.title, {
		lower: true,
		trim: true,
	});
};

module.exports = {
	lifecycles: {
		beforeCreate: parseInput,
		beforeUpdate: (_, data) => parseInput(data),
	},
};
