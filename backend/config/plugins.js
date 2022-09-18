module.exports = ({ env }) => ({
	graphql: {
		config: {
			endpoint: '/graphql',
			shadowCRUD: true,
			playgroundAlways: false,
			depthLimit: 100,
			amountLimit: 100,
			apolloServer: {
				tracing: false,
			},
		},
	},
	'users-permissions': {
		config: {
			jwtSecret: env('JWT_SECRET'),
		},
	},
});
