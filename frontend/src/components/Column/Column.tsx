import clsx from 'clsx';
import { FC, HTMLAttributes, ReactHTML } from 'react';

import classes from './Column.module.scss';

interface ColumnProps extends HTMLAttributes<HTMLElement> {
	size?: 'full' | 'larger' | 'large' | 'medium' | 'small';
	tag?: keyof ReactHTML;
}

const Column: FC<ColumnProps> = ({
	children,
	className,
	size = 'medium',
	tag = 'div',
	...props
}) => {
	const Element = tag;

	return (
		<Element
			className={clsx(classes['container'], classes[size], className)}
			{...props}
		>
			{children}
		</Element>
	);
};

export default Column;
