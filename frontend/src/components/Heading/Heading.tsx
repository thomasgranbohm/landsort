import clsx from 'clsx';
import { Children, FC } from 'react';
import slugify from 'slugify';

import Anchor from 'components/Anchor/Anchor';
import Column from 'components/Column/Column';

import classes from './Heading.module.scss';

interface HeadingProps {
	type: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'b';
}

const Heading: FC<HeadingProps> = ({ type, children }) => {
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
		<Column>
			<Element
				className={clsx(classes['container'], classes[type])}
				id={
					slug &&
					slugify(slug, {
						lower: true,
					})
				}
			>
				{children}
			</Element>
		</Column>
	);
};

export default Heading;
