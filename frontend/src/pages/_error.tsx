import { GetServerSideProps } from 'next';

import Heading from 'components/Heading';
import Layout from 'components/Layout';

import Globals from 'queries/Globals.gql';

import { queryGraphQL } from 'utils/api';
import { normalize } from 'utils/functions';
import { Queries } from 'utils/types';

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
}: Queries.Base & { statusCode: number }) => {
	const title =
		statusCode === 404 ? 'Page not found' : 'Something went wrong';

	return (
		<Layout global={normalize(global)}>
			<Heading type="h1">
				Error {statusCode}: {title}
			</Heading>
		</Layout>
	);
};

export default ErrorPage;
