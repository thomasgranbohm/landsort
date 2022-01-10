import { GetStaticProps } from 'next';

import Layout from 'components/Layout/Layout';
import SectionRenderer from 'components/SectionRenderer/SectionRenderer';

import StartPageQuery from 'queries/Startpage.gql';

import { queryGraphQL } from 'utils/api';
import { normalize } from 'utils/functions';
import { Fragments, Queries } from 'utils/types';

export const getStaticProps: GetStaticProps = async () => {
	const { data, errors } = await queryGraphQL<Queries.Page>(StartPageQuery);

	if (!!errors && errors.length > 0) {
		throw errors;
	}

	return {
		props: data,
		revalidate: 60,
	};
};

const Home = ({ global, header, page }: Queries.Page) => {
	const { sections, title } = normalize<Fragments.Page>(page);

	return (
		<Layout
			global={normalize(global)}
			header={normalize(header)}
			title={title}
		>
			<SectionRenderer sections={sections} />
		</Layout>
	);
};

export default Home;
