'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#core-controllers)
 * to customize this controller
 */

const { sanitizeEntity } = require('strapi-utils');

module.exports = {
	async findOne(context) {
		const { slug } = context.params;
		const entry = await strapi.services.article.findOne({ slug });
		return sanitizeEntity(entry, { model: strapi.models.article });
	},
};
