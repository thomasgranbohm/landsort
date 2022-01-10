'use strict';

const slugify = require('slugify');

// https://github.com/VirtusLab-Open-Source/strapi-plugin-navigation/issues/47

const validateData = async (event) => {
	const { action, params } = event;

	const data = action === 'afterCreate' ? result : params.data;
	console.log(action, data, params);
	const id = action === 'afterCreate' ? data.id : params.where.id;

	const hasChildren = !!data.children && data.children.length > 0;
	const hasParent =
		!!data.parent &&
		(typeof data.parent === 'number' || typeof data.parent.id === 'number');

	const parentId = hasParent
		? typeof data.parent === 'number'
			? data.parent
			: data.parent.id
		: null;

	if (hasParent && parentId === id) {
		throw new Error('Page cannot be its own parent');
	} else if (hasChildren && data.children.includes(id)) {
		throw new Error('Page cannot be its own child');
	} else if (hasParent && hasChildren) {
		throw new Error('Page can either have or be a parent');
	}

	if (hasParent) {
		const { parent } = await strapi.entityService.findOne(
			'api::page.page',
			parentId,
			{
				populate: {
					parent: true,
				},
			}
		);

		// Remove this to enable more nesting.
		if (!!parent) throw new Error('Page parent cannot have parent');

		const header = await strapi.service('api::header.header').find({
			populate: {
				menus: {
					// TODO: needs fixing, should only get pages.id
					populate: '*',
				},
			},
		});

		if (!!header && !!header.menus && header.menus.length > 0) {
			const { menus } = header;

			const idsInSubmenu = menus.flatMap(({ pages }) =>
				pages.map(({ id }) => id)
			);

			if (idsInSubmenu.includes(id)) {
				throw new Error('Page cannot have parent and be in a submenu');
			}
		}
	}

	if (hasChildren) {
		const children = await strapi.entityService.findMany('api::page.page', {
			filters: {
				id: {
					$in: data.children,
				},
			},
		});

		if (children && children.length > 0) {
			const grandChildrenCount = await strapi.db
				.query('api::page.page')
				.count({
					where: {
						id: {
							$in: children.map(({ id }) => id),
						},
					},
				});

			if (grandChildrenCount && grandChildrenCount > 0) {
				throw new Error('Child cannot have children');
			}
		}
	}
};

const generateSlug = (e) => {
	const title = e.params.data.title || null;

	if (title) {
		e.params.data.slug = slugify(title, {
			lower: true,
			replacement: '-',
			trim: true,
			locale: 'en',
			strict: true,
			remove: /[^a-zA-Z0-9\ \-\_]/g,
		});
	}
};

module.exports = {
	beforeCreate: generateSlug,
	afterCreate: validateData,
	beforeUpdate: (e) => {
		generateSlug(e);
		validateData(e);
	},
};
