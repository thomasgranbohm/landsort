interface Article {
	slug: string;
	title: string;
}

type Tab = {
	name: string;
	articles: Article[];
	slug: string;
};

export type NavBarProps = {
	tabs: Array<Tab>;
};

const NavBar = ({ tabs }: NavBarProps) => (
	<nav>
		{tabs.map(({ name, articles, slug }, i) => (
			<div className="tab" key={`tab-${i}`}>
				<h2>{name}</h2>
				<ul>
					{articles.map((a, i) => (
						<li key={`article-${i}`}>
							<a href={`/${slug}/${a.slug}`}>{a.title}</a>
						</li>
					))}
				</ul>
			</div>
		))}
	</nav>
);

export default NavBar;
