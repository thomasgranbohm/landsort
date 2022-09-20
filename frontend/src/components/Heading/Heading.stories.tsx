import { ComponentMeta, ComponentStory } from '@storybook/react';

import Heading from './Heading';

export default {
	title: 'Heading',
	component: Heading,
	args: {
		children: 'Lorem ipsum',
		type: 'h1',
	},
	argTypes: {
		type: {
			control: 'select',
			options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'b'],
		},
	},
} as ComponentMeta<typeof Heading>;

export const Primary: ComponentStory<typeof Heading> = ({ children, type }) => (
	<Heading type={type}>{children}</Heading>
);
