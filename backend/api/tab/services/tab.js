'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#core-services)
 * to customize this service
 */

module.exports = {
	async find() {
		const entries = await strapi.query('tab').find({}, ['articles']);
		return entries.map((a) => {
			const { articles } = a;
			return {
				...a,
				articles,
			};
		});
	},
};
