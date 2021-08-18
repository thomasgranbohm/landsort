import { GetStaticPaths, GetStaticProps } from 'next';
import Layout from '../../components/Layout/Layout';
import { fetchAPI, getGlobalData, getPage } from '../../utils/api';

export const getStaticPaths: GetStaticPaths = async () => {
	const articles = await fetchAPI(`/articles`);

	const paths = articles.map(
		({ slug, tab: { slug: tab_slug } }) => `/${tab_slug}/${slug}`
	);

	return {
		paths,
		fallback: false,
	};
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
	const { article } = params;
	const data = await getPage(article as string);
	const global = await getGlobalData();

	return {
		props: { page: data, global },
	};
};

const Article = ({ page, global }) => {
	const { title } = page;
	return (
		<Layout {...global}>
			<h1>{title}</h1>
			<pre>
				<code>{JSON.stringify(page, null, 4)}</code>
			</pre>
		</Layout>
	);
};

export default Article;
