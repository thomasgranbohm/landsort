module.exports = ({ env }) => ({
	auth: {
		secret: env('ADMIN_JWT_SECRET', '78366910b5d06b68239a6d4724a9484e'),
	},
	apiToken: {
		salt: env('API_TOKEN_SALT'),
	},
	url: env('ADMIN_URL', 'http://localhost:1337/admin'),
	autoOpen: false,
});
