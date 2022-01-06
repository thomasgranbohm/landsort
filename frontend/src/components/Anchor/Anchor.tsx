import clsx from 'clsx';
import Link from 'next/link';
import { AnchorHTMLAttributes, FC } from 'react';
import classes from './Anchor.module.scss';

interface AnchorProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
	href: string;
}

const Anchor: FC<AnchorProps> = ({ href, children, className }) => (
	<Link href={href}>
		<a className={clsx(classes['container'], className)}>{children}</a>
	</Link>
);

export default Anchor;
