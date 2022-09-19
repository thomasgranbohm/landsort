import { FC } from 'react';

import Anchor from 'components/Anchor/Anchor';
import Column from 'components/Column/Column';
import Header from 'components/Header/Header';
import Navigation from 'components/Navigation/Navigation';

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
			<Column size={12}>
				<Anchor href="https://github.com/thomasgranbohm/landsort">
					Source code
				</Anchor>
			</Column>
		</footer>
	</div>
);

export default Layout;
