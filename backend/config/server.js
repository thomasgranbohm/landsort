module.exports = ({ env }) => ({
	host: env('HOST', '0.0.0.0'),
	port: env.int('PORT', 1337),
	url: env('URL', 'http://localhost:1337'),
	admin: {
		auth: {
			secret: env('ADMIN_JWT_SECRET', '960d6049a582837941e25b783f5c6407'),
		},
		url: env('ADMIN_URL', 'http://localhost:1337/admin'),
		autoOpen: false,
	},
});
