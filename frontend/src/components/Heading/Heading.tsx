import clsx from 'clsx';
import Column from 'components/Column/Column';
import { FC } from 'react';
import classes from './Heading.module.scss';

interface HeadingProps {
	type: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'b';
}

const Heading: FC<HeadingProps> = ({ type, children }) => {
	const Element = type;

	return (
		<Column>
			<Element className={clsx(classes['container'], classes[type])}>
				{children}
			</Element>
		</Column>
	);
};

export default Heading;
