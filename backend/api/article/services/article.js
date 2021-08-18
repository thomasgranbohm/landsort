'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#core-services)
 * to customize this service
 */

module.exports = {
	async findOne(params, populate) {
		const { slug } = params;
		return strapi.query('article').findOne({ slug }, populate);
	},
};
