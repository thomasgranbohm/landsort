import {
	ApolloClient,
	ApolloClientOptions,
	InMemoryCache,
	NormalizedCacheObject,
} from '@apollo/client';

const defaults = {
	cache: new InMemoryCache(),
	defaultOptions: {
		watchQuery: {
			fetchPolicy: 'no-cache',
			errorPolicy: 'ignore',
		},
		query: {
			fetchPolicy: 'no-cache',
			errorPolicy: 'all',
		},
	},
} as ApolloClientOptions<NormalizedCacheObject>;

export const privateClient = new ApolloClient({
	uri: `${process.env.STRAPI_API_URL}/graphql`,
	...defaults,
});
export const publicClient = new ApolloClient({
	uri: `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/graphql`,
	...defaults,
});
