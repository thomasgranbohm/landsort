import Breadcrumbs, {
	BreadcrumbItem,
} from 'components/Breadcrumbs/Breadcrumbs';
import Column from 'components/Column/Column';
import Heading from 'components/Heading/Heading';
import Row from 'components/Row/Row';

import { Breadcrumb } from 'utils/types';

import classes from './Header.module.scss';

export interface HeaderProps {
	title: string;
	breadcrumbs?: Array<Breadcrumb>;
	home?: string;
}

const Header = ({ title, breadcrumbs, home }: HeaderProps) => (
	<header className={classes['container']}>
		{home && breadcrumbs && breadcrumbs.length > 0 && (
			<Breadcrumbs className={classes['breadcrumbs']} home={home}>
				{breadcrumbs.map(({ slug, title }, i) => (
					<BreadcrumbItem key={i} href={slug}>
						{title}
					</BreadcrumbItem>
				))}
			</Breadcrumbs>
		)}
		<Heading className={classes['title']} type="h1">
			{title}
		</Heading>
	</header>
);

export default Header;
