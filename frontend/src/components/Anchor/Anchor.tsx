import clsx from 'clsx';
import Link from 'next/link';
import { AnchorHTMLAttributes, forwardRef } from 'react';

import classes from './Anchor.module.scss';

export interface AnchorProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
	href?: string;
	clean?: boolean;
}

// eslint-disable-next-line react/display-name
const Anchor = forwardRef<HTMLAnchorElement, AnchorProps>(
	({ href, children, className, clean, ...props }, ref) => (
		<Link href={href}>
			<a
				ref={ref}
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
	)
);

export default Anchor;
