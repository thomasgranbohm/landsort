const path = require('path');

module.exports = {
	stories: [
		{
			directory: '../src/components/',
			titlePrefix: 'components',
			files: '**/*.stories.tsx',
		},
	],
	addons: [
		'@storybook/addon-links',
		'@storybook/addon-essentials',
		'@storybook/addon-interactions',
		'@storybook/addon-a11y',
		{
			name: 'storybook-addon-next',
			options: {
				nextConfigPath: path.resolve(__dirname, '../next.config.js'),
			},
		},
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
};
