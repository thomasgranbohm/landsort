import clsx from 'clsx';
import { Children, FC, HTMLAttributes } from 'react';
import slugify from 'slugify';

import classes from './Heading.module.scss';

interface HeadingProps extends HTMLAttributes<HTMLHeadingElement> {
	type: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'b';
}

const Heading: FC<HeadingProps> = ({ type, children, className, ...props }) => {
	const Element = type;

	let slug = undefined;
	try {
		slug = Children.only(children) || (children as string);
	} catch (error) {
		if (children instanceof Array && children.length > 0) {
			slug = children.join('-');
		} else if (typeof children === 'string') {
			slug = children;
		} else {
			console.debug('Children was unsupported type.');
		}
	}

	return (
		<Element
			{...props}
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
