const path = require('path');

module.exports = {
	stories: ['../src/components/**/*.stories.@(js|jsx|ts|tsx)'],
	addons: [
		'@storybook/addon-links',
		'@storybook/addon-essentials',
		'@storybook/addon-interactions',
    '@storybook/addon-a11y'
	],
	framework: '@storybook/react',
	core: {
		builder: '@storybook/builder-webpack5',
	},
	typescript: {
		check: false,
		checkOptions: {},
		reactDocgen: 'react-docgen-typescript',
		reactDocgenTypescriptOptions: {
			compilerOptions: {
				allowSyntheticDefaultImports: false,
				esModuleInterop: false,
			},
		},
	},
	webpackFinal: async (config) => {
		config.module.rules.push({
			test: /\.scss$/,
			use: [
				'style-loader',
				{
					loader: 'css-loader',
					options: {
						modules: {
							localIdentName: '[name]__[local]',
						},
					},
				},
				{
					loader: 'sass-loader',
					options: {
						implementation: require.resolve('sass'),
						sassOptions: {
							includePaths: [path.join(__dirname, '../src/')],
						},
					},
				},
			],
			include: path.resolve(__dirname, '../src'),
		});

		return config;
	},
};
