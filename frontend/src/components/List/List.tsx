import { FC } from 'react';

import Column from 'components/Column';

import classes from './List.module.scss';

interface ListProps {
	type: 'ol' | 'ul';
}

const List: FC<ListProps> = ({ type, children }) => {
	const Element = type;

	return (
		<Column>
			<Element className={classes['container']}>{children}</Element>
		</Column>
	);
};

export default List;
