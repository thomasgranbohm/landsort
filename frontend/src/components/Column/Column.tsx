import { FC } from 'react';
import { concat } from '../../utils/functions';
import classes from './Column.module.scss';

export type ColumnProps = {
	size: 'large' | 'medium' | 'small';
};

const Column: FC<ColumnProps> = ({ children, size }) => (
	<div className={concat(classes['container'], classes[size])}>
		{children}
	</div>
);

export default Column;
