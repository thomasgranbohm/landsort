export function getStrapiURL(path: string) {
	return `${
		(typeof window === 'undefined'
			? process.env.PRIVATE_STRAPI_API_URL
			: process.env.NEXT_PUBLIC_STRAPI_API_URL) || 'http://localhost:1337'
	}${path}`;
}

// Helper to make GET requests to Strapi
export async function fetchAPI(path: string, options = {}) {
	const defaultOptions = {
		headers: {
			'Content-Type': 'application/json',
		},
	};
	const mergedOptions = {
		...defaultOptions,
		...options,
	};
	const requestUrl = getStrapiURL(path);
	const response = await fetch(requestUrl, mergedOptions);

	if (!response.ok) {
		console.error(response.statusText);
		throw new Error(`An error occured please try again`);
	}
	const data = await response.json();
	return data;
}

export async function getPage(slug: string) {
	const page = await fetchAPI(`/articles/${slug}`);

	return page;
}

export async function getHomePage() {
	const homepage = await fetchAPI(`/home-page`);
	const global = await getGlobalData();

	return {
		page: homepage,
		global,
	};
}

export async function getGlobalData() {
	const [tabs] = await Promise.all([fetchAPI(`/tabs`)]);
	return { tabs };
}
