module.exports = ({ env }) => ({
	auth: {
		secret: env('ADMIN_JWT_SECRET', '78366910b5d06b68239a6d4724a9484e'),
	},
	url: env('ADMIN_URL', 'http://localhost:1337/admin'),
	autoOpen: false,
});
