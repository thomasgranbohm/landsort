import clsx from 'clsx';
import { FC, HTMLAttributes } from 'react';

import classes from './Column.module.scss';

interface ColumnProps extends HTMLAttributes<HTMLElement> {
	size?: 'large' | 'medium' | 'small';
}

const Column: FC<ColumnProps> = ({
	children,
	className,
	size = 'medium',
	...props
}) => (
	<div
		className={clsx(classes['container'], classes[size], className)}
		{...props}
	>
		{children}
	</div>
);

export default Column;
