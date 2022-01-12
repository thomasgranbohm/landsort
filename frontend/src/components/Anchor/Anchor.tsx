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
	({ href, children, className, clean, ...props }, ref) => {
		const child = (
			<a
				ref={ref}
				className={clsx(
					classes['container'],
					clean && classes['clean'],
					className
				)}
				rel="noopener noreferrer"
				target="_self"
				onClick={(e) => {
					if (!!href && href.startsWith('/')) {
						(e.target as HTMLElement).blur();
					}
				}}
				{...props}
			>
				{children}
			</a>
		);

		return !!href ? <Link href={href}>{child}</Link> : child;
	}
);

export default Anchor;
