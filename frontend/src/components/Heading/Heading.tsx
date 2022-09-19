import clsx from 'clsx';
import { Children, FC } from 'react';
import slugify from 'slugify';

import { WithChildren, WithClassname } from 'utils/types';

import classes from './Heading.module.scss';

interface HeadingProps extends WithChildren, WithClassname {
	type?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'b';
}

const Heading: FC<HeadingProps> = ({ type = 'b', children, className }) => {
	const Element = type;

	let slug = undefined;
	try {
		slug = Children.only(children) || (children as string);
	} catch (error) {
		if (children instanceof Array && children.length > 0) {
			slug = children.join('-');
		} else if (typeof children === 'string') {
			slug = children;
		}
	}

	return (
		<Element
			className={clsx(classes['container'], classes[type], className)}
			id={
				slug &&
				slugify(slug, {
					lower: true,
				})
			}
		>
			{children}
		</Element>
	);
};

export default Heading;
