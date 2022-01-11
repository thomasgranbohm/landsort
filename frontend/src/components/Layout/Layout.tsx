import { FC } from 'react';

import Anchor from 'components/Anchor/Anchor';
import Column from 'components/Column/Column';
import Header from 'components/Header/Header';
import Navigation from 'components/Navigation/Navigation';

import { Breadcrumb, Fragments } from 'utils/types';

import classes from './Layout.module.scss';

interface LayoutProps {
	title?: string;
	global: Fragments.Global;
	navigation: Fragments.Header;
	breadcrumbs?: Array<Breadcrumb>;
}

const Layout: FC<LayoutProps> = ({
	global,
	navigation,
	breadcrumbs,
	children,
	title,
}) => (
	<div className={classes['container']}>
		<Navigation logo={global.logo} {...navigation} />
		<Header breadcrumbs={breadcrumbs} title={title} />
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
