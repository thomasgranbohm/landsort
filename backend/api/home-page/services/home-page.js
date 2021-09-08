'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#core-services)
 * to customize this service
 */

module.exports = {
	async find(params, populate) {
		const homepage = await strapi.query('home-page').findOne({});
		const news_items = await strapi.query('news-item').find({});
		return { ...homepage, news_items };
	},
};
