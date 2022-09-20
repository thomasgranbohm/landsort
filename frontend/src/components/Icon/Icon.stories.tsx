import { ComponentMeta, ComponentStory } from '@storybook/react';

import Icon from './Icon';

export default {
	title: 'Icon',
	component: Icon,
	args: {
		size: '1x',
		type: 'menu',
	},
	argTypes: {
		size: {
			control: 'select',
			options: ['1x', '2x', '3x', '4x'],
		},
		type: {
			control: 'select',
			options: ['menu', 'close', 'arrow_drop_down'],
		},
	},
} as ComponentMeta<typeof Icon>;

export const Primary: ComponentStory<typeof Icon> = (props) => (
	<Icon {...props} />
);
