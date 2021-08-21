import { GetStaticPaths, GetStaticProps } from 'next';
import Markdown from 'react-markdown';
import Column from '../../components/Column/Column';
import Image from '../../components/Image/Image';
import Layout from '../../components/Layout/Layout';
import {
	fetchAPI,
	getGlobalData,
	getPage,
	getStrapiMedia,
} from '../../utils/api';

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
	const { title, content, published_at, headshot } = page;
	return (
		<Layout {...global}>
			{headshot && (
				<Column size="large">
					{/* eslint-disable-next-line jsx-a11y/alt-text */}
					<Image {...headshot} type="headshot" />
				</Column>
			)}
			<Column size="small">
				<h1>{title}</h1>
			</Column>
			<Column size="small">
				{published_at && (
					<p>
						<b>Publicerad: </b>
						{new Date(published_at).toLocaleDateString('sv')}
					</p>
				)}
			</Column>
			<Markdown
				components={{
					p({ children, node }) {
						if (node.children[0]['tagName'] === 'img') {
							const image = node.children[0];
							const { src, alt } = image['properties'];
							return (
								<Column size="large">
									{/* eslint-disable-next-line jsx-a11y/alt-text */}
									<Image
										url={src}
										alternativeText={alt}
										name={alt}
										type="headshot"
									/>
								</Column>
							);
						}
						return (
							<Column size="small">
								<p>{children}</p>
							</Column>
						);
					},
				}}
			>
				{content}
			</Markdown>
		</Layout>
	);
};

export default Article;
