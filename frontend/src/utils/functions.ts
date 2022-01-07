import { Strapi } from './types';

/**
 * Since Strapi updated their GraphQL API in v4
 * this function is needed to combat the extreme
 * nesting caused by the new API structure.
 *
 * Shout out to @roelbeerens for this function
 * https://forum.strapi.io/t/discussion-regarding-the-complex-response-structure-for-rest-graphql-developer-experience/13400/9
 */
type Input<T> = Strapi.V4Wrapper<T>;

export const normalize = <T>(a: Input<T>): T => {
	if (!a) throw new Error('Input is null');

	if (Array.isArray(a)) throw new Error('Normalize input is array.');

	if (typeof a === 'object') {
		if (
			'data' in a &&
			!!a.data &&
			'attributes' in a.data &&
			!!a.data.attributes
		)
			return a.data?.attributes;
	}

	throw new Error('Input is not object');
};

// export const normalize = (data: Input): Output => {
// 	const isObject = (data: any) =>
// 		Object.prototype.toString.call(data) === '[object Object]';
// 	const isArray = (data: any) =>
// 		Object.prototype.toString.call(data) === '[object Array]';

// 	const flatten = (data: any) => {
// 		if (!data.attributes) return data;

// 		return {
// 			id: data.id,
// 			...data.attributes,
// 		};
// 	};

// 	if (Array.isArray(data)) {
// 		return data.map((item: any) => normalize(item));
// 	}

// 	let a = null;

// 	if (typeof data === 'object') {
// 		if (Array.isArray(data.data)) {
// 			a = [...data.data];
// 		} else if (isObject(data.data)) {
// 			a = flatten({ ...data.data });
// 		} else if (data.data === null) {
// 			a = null;
// 		} else {
// 			a = flatten(data);
// 		}

// 		return data;
// 	}

// 	return data;
// };
