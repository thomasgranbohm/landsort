import { OpenGraphMedia } from 'next-seo/lib/types';
import { Fragments } from './types';

export function getStrapiMedia(url: string) {
	if (url == null) {
		return null;
	}

	// Return the Strapi URL if the media is hosted locally
	if (url.startsWith('/')) {
		return `${
			process.env.NEXT_PUBLIC_STRAPI_API_URL || 'http://localhost:1337'
		}${url}`;
	}

	return url;
}

export const parseOGImages = (
	image: Fragments.Media
): Array<OpenGraphMedia> | null | undefined => {
	if (!image) return null;
	const { url, width, height, formats } = image;

	const images = [{ url: getStrapiMedia(url), width, height }];

	if (formats) {
		images.push(
			...Object.values(image).map(({ height, url, width }) => ({
				url: getStrapiMedia(url),
				width,
				height,
			}))
		);
	}

	return images;
};
