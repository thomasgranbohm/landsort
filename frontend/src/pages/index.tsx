import { GetStaticProps } from 'next';

import Layout from 'components/Layout/Layout';
import SectionRenderer from 'components/SectionRenderer/SectionRenderer';

import StartPageQuery from 'queries/Startpage.gql';

import { queryGraphQL } from 'utils/api';
import { normalize } from 'utils/functions';
import { Fragments, Queries } from 'utils/types';

export const getStaticProps: GetStaticProps = async () => {
	const { data, errors } = await queryGraphQL<Queries.Startpage>(
		StartPageQuery
	);

	if (!!errors && errors.length > 0) {
		console.error(errors);
		throw errors[0];
	}

	if (!data.startpage) {
		throw new Error('Did not receive Startpage');
	}

	return {
		props: data,
		revalidate: 60,
	};
};

const Startpage = ({ global, startpage }: Queries.Startpage) => {
	const { sections, title } = normalize<Fragments.Startpage>(startpage);

	return (
		<Layout global={normalize(global)} title={title}>
			<SectionRenderer sections={sections} />
		</Layout>
	);
};

export default Startpage;
