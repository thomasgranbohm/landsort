import clsx from 'clsx';
import { FC } from 'react';

import Anchor from 'components/Anchor/Anchor';
import Heading from 'components/Heading/Heading';
import Image from 'components/Image/Image';
import Navigation from 'components/Navigation/Navigation';

import { normalize } from 'utils/functions';
import { Fragments } from 'utils/types';

import classes from './Layout.module.scss';

interface LayoutProps {
	title?: string;
	global: Fragments.Global;
	header: Fragments.Header;
}

const Layout: FC<LayoutProps> = ({ global, header, children, title }) => (
	<div className={classes['container']}>
		<Navigation logo={global.logo} {...header} />
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
