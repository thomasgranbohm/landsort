import clsx from 'clsx';
import { createElement, ReactHTML, ReactNode } from 'react';

import { WithChildren, WithClassname } from 'utils/types';

import classes from './Column.module.scss';

type SIZES = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;

type BREAKPOINTS =
	| SIZES
	| [SIZES, SIZES]
	| [SIZES, SIZES, SIZES]
	| [SIZES, SIZES, SIZES, SIZES];

interface ColumnProps extends WithChildren, WithClassname {
	size: BREAKPOINTS;
	start?: BREAKPOINTS; // Which column to start from, not relative to current position.
	tag?: keyof ReactHTML;
}

const DEVICES = ['sm', 'md', 'lg', 'xl'];

const Column = ({
	children,
	className,
	size,
	start,
	tag = 'div',
}: ColumnProps) => {
	const sizes = Array.isArray(size)
		? size.map((a, i) => classes[[DEVICES[i], a].join('-')])
		: classes[`size-${size}`];

	const starts = Array.isArray(start)
		? start.map((a, i) =>
				a !== null
					? classes[['start', DEVICES[i], a].join('-')]
					: undefined
		  )
		: classes[`start-${start}`];

	return createElement(
		tag,
		{
			className: clsx(classes['container'], sizes, starts, className),
		},
		children
	);
};

export default Column;
