'use strict';

const { sanitizeEntity } = require('strapi-utils');

module.exports = {
	async find() {
		const entry = await strapi.services.tab.find();
		return sanitizeEntity(entry, { model: strapi.models.tab });
	},
};
