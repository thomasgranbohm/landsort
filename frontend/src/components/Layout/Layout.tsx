import { FC } from 'react';

import Anchor from 'components/Anchor';
import Header from 'components/Header';
import Navigation from 'components/Navigation';

import { Breadcrumb, Fragments, WithChildren } from 'utils/types';

import classes from './Layout.module.scss';

interface LayoutProps extends WithChildren {
	breadcrumbs?: Array<Breadcrumb>;
	global: Fragments.Global;
	title?: string;
}

const Layout: FC<LayoutProps> = ({ global, breadcrumbs, children, title }) => (
	<div className={classes['container']}>
		<Navigation {...global} />
		<Header breadcrumbs={breadcrumbs} title={title} home={global.home} />
		<main>{children}</main>
		<footer>
			<Anchor href="https://github.com/thomasgranbohm/landsort">
				Source code
			</Anchor>
		</footer>
	</div>
);

export default Layout;
