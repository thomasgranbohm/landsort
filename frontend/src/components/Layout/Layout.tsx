import { FC } from 'react';
import NavBar, { NavBarProps } from 'components/NavBar/NavBar';

type LayoutProps = NavBarProps;

const Layout: FC<LayoutProps> = ({ children, tabs }) => (
	<main>
		<NavBar tabs={tabs} />
		{children}
	</main>
);

export default Layout;
