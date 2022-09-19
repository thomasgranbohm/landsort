import { ComponentMeta, ComponentStory } from '@storybook/react';

import Row from '../Row/Row';
import Column from './Column';

export default {
	title: 'Column',
	component: Column,
	args: {
		children:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos quo accusantium quisquam? Unde nobis ipsa, vero vel molestias officia rerum doloribus? Voluptas laudantium recusandae, dolorem obcaecati tenetur consequatur similique enim!',
	},
	argTypes: {},
} as ComponentMeta<typeof Column>;

export const Primary: ComponentStory<typeof Column> = ({ children }) => (
	<Row>
		<Column size={[12, 8, 6, 4]}>{children}</Column>
	</Row>
);
