import Breadcrumbs, {
	BreadcrumbItem,
} from 'components/Breadcrumbs/Breadcrumbs';
import Column from 'components/Column/Column';
import Heading from 'components/Heading/Heading';

import { Breadcrumb } from 'utils/types';

import classes from './Header.module.scss';

export interface HeaderProps {
	title: string;
	breadcrumbs?: Array<Breadcrumb>;
}

const Header = ({ title, breadcrumbs }: HeaderProps) => (
	<header className={classes['container']}>
		<Column size="medium">
			{breadcrumbs && breadcrumbs.length > 0 && (
				<Breadcrumbs className={classes['breadcrumbs']}>
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
		</Column>
	</header>
);

export default Header;
