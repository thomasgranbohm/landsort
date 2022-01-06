module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '78366910b5d06b68239a6d4724a9484e'),
  },
});
