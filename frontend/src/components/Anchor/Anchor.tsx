import clsx from 'clsx';
import Link from 'next/link';
import { AnchorHTMLAttributes, FC } from 'react';

import classes from './Anchor.module.scss';

interface AnchorProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
	href?: string;
	clean?: boolean;
}

const Anchor: FC<AnchorProps> = ({
	href,
	children,
	className,
	clean,
	...props
}) => (
	<Link href={href}>
		<a
			className={clsx(
				classes['container'],
				clean && classes['clean'],
				className
			)}
			rel="noopener noreferrer"
			target="_self"
			{...props}
		>
			{children}
		</a>
	</Link>
);

export default Anchor;
