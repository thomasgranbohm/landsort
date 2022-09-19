import '../src/styles/globals.scss';
import '../src/styles/includes.scss';

export const parameters = {
	actions: { argTypesRegex: '^on[A-Z].*' },
	controls: {
		matchers: {
			color: /(background|color)$/i,
			date: /Date$/,
		},
	},
	backgrounds: {
		grid: {
			cellSize: 128,
			opacity: 0.5,
			cellAmount: 1,
			offsetX: 16,
			offsetY: 16,
		},
	},
};
