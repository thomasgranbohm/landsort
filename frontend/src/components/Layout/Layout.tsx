import { FC } from 'react';

import Anchor from 'components/Anchor/Anchor';
import Heading from 'components/Heading/Heading';

import classes from './Layout.module.scss';

interface LayoutProps {
	title?: string;
}

const Layout: FC<LayoutProps> = ({ children, title }) => (
	<div className={classes['container']}>
		<header>
			<Heading type="h1">{title || 'Landsort Fågelstation'}</Heading>
		</header>
		<main>{children}</main>
		<footer>
			<Anchor href="https://github.com/thomasgranbohm/landsort">
				Source code
			</Anchor>
		</footer>
	</div>
);

export default Layout;
