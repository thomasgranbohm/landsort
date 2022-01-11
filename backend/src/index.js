'use strict';

module.exports = {
	/**
	 * An asynchronous register function that runs before
	 * your application is initialized.
	 *
	 * This gives you an opportunity to extend code.
	 */
	register({ strapi }) {
		const { transformArgs } = strapi
			.plugin('graphql')
			.service('builders').utils;
		const { toEntityResponse } = strapi
			.plugin('graphql')
			.service('format').returnTypes;

		const extensionService = strapi.plugin('graphql').service('extension');

		const extension = ({ nexus }) => ({
			types: [
				nexus.extendType({
					type: 'Query',
					definition(t) {
						t.field('pageBySlug', {
							type: 'PageEntityResponse',
							args: { slug: nexus.stringArg() },
							async resolve(parent, args, ctx) {
								const resourceUID = 'api::page.page';
								const transformedArgs = transformArgs(args, {
									contentType:
										strapi.contentTypes[resourceUID],
									usePagination: false,
								});

								const data = await strapi.db
									.query(resourceUID)
									.findOne({
										where: transformedArgs,
										populate: true,
									});

								if (data) {
									return toEntityResponse(data, {
										args: transformedArgs,
										resourceUID,
									});
								} else {
									throw new Error('Not found');
								}
							},
						});
					},
				}),
			],

			resolversConfig: {
				'Query.pageBySlug': {
					auth: false,
				},
			},
		});

		extensionService.use(extension);
	},

	/**
	 * An asynchronous bootstrap function that runs before
	 * your application gets started.
	 *
	 * This gives you an opportunity to set up your data model,
	 * run jobs, or perform some special logic.
	 */
	bootstrap(/*{ strapi }*/) {},
};
