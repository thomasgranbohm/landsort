import { Fragments, Strapi } from './types';

/**
 * Since Strapi updated their GraphQL API in v4
 * this function is needed to combat the extreme
 * nesting caused by the new API structure.
 *
 * Shout out to @roelbeerens for this function
 * https://forum.strapi.io/t/discussion-regarding-the-complex-response-structure-for-rest-graphql-developer-experience/13400/9
 */

type Input<T> = Strapi.V4Wrapper<T>;

type Output<T> = T extends Array<unknown> ? T : T;

export const normalize = <T>(a: Input<T>): Output<T> => {
	if (!a) throw new Error('Input is null');

	if (Array.isArray(a)) throw new Error('Normalize input is array.');

	if (typeof a === 'object') {
		if ('data' in a === false || !a.data)
			throw new Error('Data is not set or not defined');

		if (Array.isArray(a.data)) {
			return a.data
				.filter((b) => !!b.attributes)
				.map<T>((b: Strapi.V4Attributes<T>) => {
					if ('__typename' in b.attributes)
						delete b.attributes['__typename'];
					return b.attributes;
				}) as Output<T>;
		} else if ('attributes' in a.data && !!a.data.attributes) {
			if ('__typename' in a.data.attributes) {
				delete a.data.attributes['__typename'];
			}
			return a.data.attributes as Output<T>;
		}
	}

	throw new Error('Input is not object');
};

export const getSlug = ({
	parent,
	slug,
}: Pick<Fragments.Page, 'parent' | 'slug'>): string[] => {
	if (!!parent && !!parent.data) {
		return [...getSlug(normalize(parent)), slug];
	}
	return [slug];
};
