import { GetStaticPaths, GetStaticProps } from 'next';

import Layout from 'components/Layout';
import SectionRenderer from 'components/SectionRenderer';

import PageBySlugQuery from 'queries/PageBySlug.gql';
import PageSlugsQuery from 'queries/PageSlugs.gql';

import { queryGraphQL } from 'utils/api';
import { getBreadcrumbs, getSlug, normalize } from 'utils/functions';
import { Fragments, Queries } from 'utils/types';

export const getStaticProps: GetStaticProps = async ({ params }) => {
	const slug =
		typeof params.slugs === 'object'
			? params.slugs.pop()
			: params.slugs.toString();

	const { data, errors } = await queryGraphQL<Queries.PageBySlug>(
		PageBySlugQuery,
		{
			slug,
		}
	);

	if (!!errors && errors.length > 0) {
		throw errors;
	}

	if (!data.page) {
		throw new Error('Did not receive Page');
	}

	return {
		props: data,
		revalidate: 60,
		notFound: !data || !data.page,
	};
};

export const getStaticPaths: GetStaticPaths = async ({}) => {
	const { data, errors } = await queryGraphQL<Queries.PageSlugs>(
		PageSlugsQuery
	);

	if (!!errors && errors.length > 0) {
		throw errors;
	}

	const { pages } = data;

	const paths = normalize<Fragments.PageSlugs>(pages)
		.map(getSlug)
		.map((slugs) => ({
			params: {
				slugs,
			},
		}));

	return {
		paths,
		fallback: false,
	};
};

const BlogPage = ({ global, page }: Queries.PageBySlug) => {
	const { parent, sections, slug, title } = normalize<Fragments.Page>(page);

	return (
		<Layout
			breadcrumbs={getBreadcrumbs({ parent, slug, title })}
			global={normalize(global)}
			title={title}
		>
			<SectionRenderer sections={sections} />
		</Layout>
	);
};

export default BlogPage;
