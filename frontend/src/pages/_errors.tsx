import { GetServerSideProps } from 'next';
import { NextSeo } from 'next-seo';

import Globals from 'queries/Globals.gql';

import { queryGraphQL } from 'utils/api';
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

const ErrorPage = ({ statusCode }) => {
	const title =
		statusCode.toString() === '404'
			? 'Page not found'
			: 'Something went wrong';

	return (
		<>
			<NextSeo title={title} />
		</>
	);
};

export default ErrorPage;
