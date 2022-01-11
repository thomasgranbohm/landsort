import { GetServerSideProps } from 'next';
import { NextSeo } from 'next-seo';

import Heading from 'components/Heading/Heading';
import Layout from 'components/Layout/Layout';

import Globals from 'queries/Globals.gql';

import { queryGraphQL } from 'utils/api';
import { normalize } from 'utils/functions';
import { Fragments, Queries } from 'utils/types';

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
	const statusCode = res ? res.statusCode : 404;

	const { data } = await queryGraphQL<Queries.Base>(Globals);

	return {
		props: {
			statusCode,
			...data,
		},
	};
};

const ErrorPage = ({
	statusCode,
	global,
	header,
}: Queries.Base & { statusCode: number }) => {
	const title =
		statusCode === 404 ? 'Page not found' : 'Something went wrong';

	return (
		<Layout global={normalize(global)} navigation={normalize(header)}>
			<Heading type="h1">
				Error {statusCode}: {title}
			</Heading>
		</Layout>
	);
};

export default ErrorPage;
