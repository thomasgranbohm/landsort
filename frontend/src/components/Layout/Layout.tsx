import Anchor from 'components/Anchor/Anchor';
import Heading from 'components/Heading/Heading';
import { FC } from 'react';
import classes from './Layout.module.scss';

const Layout: FC = ({ children }) => (
	<div className={classes['container']}>
		<header>
			<Heading type="h1">Landsort Fågelstation</Heading>
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
