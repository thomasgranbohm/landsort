import { FC } from 'react';

import Anchor from 'components/Anchor/Anchor';
import Column from 'components/Column/Column';
import Header from 'components/Header/Header';
import Navigation from 'components/Navigation/Navigation';

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
		<Header title={title} />
		<main>{children}</main>
		<footer>
			<Column size="large">
				<Anchor href="https://github.com/thomasgranbohm/landsort">
					Source code
				</Anchor>
			</Column>
		</footer>
	</div>
);

export default Layout;
