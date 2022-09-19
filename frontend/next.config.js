const path = require('path');

/** @type {import('next').NextConfig} */
module.exports = {
	reactStrictMode: false,
	images: {
		domains: ['backend'],
	},
	sassOptions: {
		includePaths: [path.join(__dirname, 'src/styles')],
	},
	webpack: (config) => {
		config.module.rules.push({
			test: /\.(graphql|gql)$/,
			exclude: /node_modules/,
			use: [{ loader: 'graphql-tag/loader' }],
		});

		return config;
	},
};
