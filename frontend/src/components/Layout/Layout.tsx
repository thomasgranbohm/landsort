import { FC } from 'react';
import Navigation, { NavigationProps } from 'components/Navigation/Navigation';

type LayoutProps = NavigationProps;

const Layout: FC<LayoutProps> = ({ children, tabs }) => (
	<main>
		<Navigation tabs={tabs} />
		{children}
	</main>
);

export default Layout;
