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

export function getStrapiMedia(url) {
	if (url == null) {
		return null;
	}

	// Return the full URL if the media is hosted on an external provider
	if (url.startsWith('http') || url.startsWith('//')) {
		return url;
	}

	// Otherwise prepend the URL path with the Strapi URL
	return `${
		process.env.NEXT_PUBLIC_STRAPI_API_URL || 'http://localhost:1337'
	}${url}`;
}

const generateTabs = async () => {
	const tabs = await fetchAPI(`/tabs`);

	return tabs;
};

export async function getTab(slug: string) {
	const tab = await fetchAPI(`/tabs/${slug}`);

	return tab;
}

export async function getPage(slug: string) {
	const page = await fetchAPI(`/articles/${slug}`);

	return page;
}

export async function getHomePage() {
	const homepage = await fetchAPI(`/home-page`);

	return homepage;
}

export async function getGlobalData() {
	const tabs = await generateTabs();

	return { tabs };
}
