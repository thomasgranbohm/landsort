import NextImage, { ImageProps as NextImageProps } from 'next/image';

import Column from 'components/Column/Column';

import { getStrapiMedia } from 'utils/media';
import { Fragments } from 'utils/types';

type ImageProps = Omit<NextImageProps, 'src'> & Fragments.Media;

const Image = ({
	alternativeText,
	caption,
	formats,
	name,
	url,
	alt,
	...props
}: ImageProps) => {
	const source = getStrapiMedia(url).replace(
		process.env.NEXT_PUBLIC_STRAPI_API_URL,
		'http://backend:1337'
	);

	const alternative = caption || alternativeText || alt || name;

	const blurDataURL =
		!!formats && formats.base64
			? formats.base64.url
			: `/_next/image?url=${source}&w=32&q=1`;

	return (
		<Column size="large">
			<NextImage
				{...props}
				placeholder="blur"
				blurDataURL={blurDataURL}
				src={source}
				alt={alternative}
			/>
		</Column>
	);
};

export default Image;
