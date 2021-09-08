'use strict';

const { sanitizeEntity } = require('strapi-utils');

module.exports = {
	async find() {
		const entry = await strapi.services.tab.find({}, ['articles.slug']);
		return sanitizeEntity(entry, { model: strapi.models.tab });
	},
	async findOne(context) {
		const { slug } = context.params;
		const entry = await strapi.services.tab.findOne({ slug });
		return sanitizeEntity(entry, { model: strapi.models.tab });
	},
};
