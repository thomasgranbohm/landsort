import ArticleBlurb from '../../components/ArticleBlurb/ArticleBlurb';
import Column from '../../components/Column/Column';
import Image from '../../components/Image/Image';
import Layout from '../../components/Layout/Layout';
import { Tab as ITab } from '../../types';
import { fetchAPI, getGlobalData, getTab } from '../../utils/api';

export const getServerSideProps = async ({ params }) => {
	const { tab: tabName } = params;
	const [tab, global] = await Promise.all([getTab(tabName), getGlobalData()]);

	return { props: { tab, global } };
};

const Tab = ({ tab, global }) => {
	const { articles, name }: ITab = tab;
	return (
		<Layout {...global}>
			<Column size="large">
				<h1>{name}</h1>
			</Column>
			{articles &&
				articles.map((a, i) => (
					<ArticleBlurb
						{...a}
						slug={`/${tab.slug}/${a.slug}`}
						key={`article-${i}`}
					/>
				))}
		</Layout>
	);
};

export default Tab;
