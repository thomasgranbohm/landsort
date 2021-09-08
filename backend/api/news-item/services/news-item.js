'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#core-services)
 * to customize this service
 */

module.exports = {
	async find(params, populate) {
		const items = await strapi
			.query('news-item')
			.model.find({})
			.populate('article article.tab');
		return items;
	},
};
