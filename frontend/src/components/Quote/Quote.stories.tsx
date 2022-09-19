import { ComponentMeta, ComponentStory } from '@storybook/react';

import Quote from './Quote';

export default {
	title: 'Quote',
	component: Quote,
	args: {
		children:
			'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt ducimus aut labore veritatis animi ipsam! Officiis autem cum, reprehenderit magni corrupti enim sint praesentium, quibusdam velit quasi iusto, fuga ipsam!',
		author: 'Gill Bates',
	},
	argTypes: {},
} as ComponentMeta<typeof Quote>;

export const Primary: ComponentStory<typeof Quote> = ({ author, children }) => (
	<Quote author={author}>{children}</Quote>
);
