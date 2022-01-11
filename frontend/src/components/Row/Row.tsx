import clsx from 'clsx';
import { FC, HTMLAttributes, ReactHTML } from 'react';

import classes from './Row.module.scss';

interface RowProps extends HTMLAttributes<HTMLElement> {
	tag?: keyof ReactHTML;
}

const Row: FC<RowProps> = ({
	children,
	className,
	tag = 'section',
	...props
}) => {
	const Element = tag;

	return (
		<Element className={clsx(classes['container'], className)} {...props}>
			{children}
		</Element>
	);
};

export default Row;
