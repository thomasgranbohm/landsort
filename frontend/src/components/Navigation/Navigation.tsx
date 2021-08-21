import { Tab } from '../../types';
import Column from '../Column/Column';
import classes from './Navigation.module.scss';

export type NavigationProps = {
	tabs: Array<Tab>;
};

const Navigation = ({ tabs }: NavigationProps) => (
	<nav className={classes['container']}>
		{[{ name: 'Hem', slug: '', articles: [] }, ...tabs].map(
			({ name, articles, slug }, i) => (
				<div className={classes['tab']} key={`tab-${i}`}>
					<p className={classes['name']}>
						<a href={`/${slug}`}>
							<b>{name}</b>
						</a>
					</p>
					{articles && (
						<ul className={classes['links']}>
							{articles.map((a, i) => (
								<li key={`article-${i}`}>
									<a href={`/${slug}/${a.slug}`}>{a.title}</a>
								</li>
							))}
						</ul>
					)}
				</div>
			)
		)}
	</nav>
);

export default Navigation;
