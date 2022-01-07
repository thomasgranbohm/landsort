import { ApolloError } from '@apollo/client';
import { GraphQLError } from 'graphql';
import { privateClient } from './apollo-client';

export function getStrapiURL(path: string) {
	return `${
		(typeof window === 'undefined'
			? process.env.PRIVATE_STRAPI_API_URL
			: process.env.NEXT_PUBLIC_STRAPI_API_URL) || 'http://localhost:1337'
	}${path}`;
}

export async function queryGraphQL<T>(
	query: any,
	variables = {}
): Promise<{ data: T; errors?: readonly GraphQLError[] }> {
	try {
		const { data, errors } = await privateClient.query({
			query,
			variables,
		});

		return { data, errors };
	} catch (error: unknown) {
		if (
			error instanceof ApolloError &&
			!!error.networkError &&
			'result' in error['networkError']
		)
			console.error(
				'GraphQL Error:',
				JSON.stringify(error.networkError.result, null, 4) ||
					error.networkError.result
			);
		else console.log(error);
		throw error;
	}
}
