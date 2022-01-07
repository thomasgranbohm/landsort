import Anchor from 'components/Anchor/Anchor';
import Heading from 'components/Heading/Heading';
import Image from 'components/Image/Image';
import Layout from 'components/Layout/Layout';
import List from 'components/List/List';
import ListItem from 'components/ListItem/ListItem';
import Paragraph from 'components/Paragraph/Paragraph';
import Quote from 'components/Quote/Quote';
import Row from 'components/Row/Row';
import SectionRenderer from 'components/SectionRenderer/SectionRenderer';
import { GetStaticProps } from 'next';
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

const Home = ({ page }: Queries.Page) => {
	const { sections, slug, title } = normalize<Fragments.Page>(page);

	return (
		<Layout title={title}>
			<SectionRenderer sections={sections} />
		</Layout>
	);
};

export default Home;
