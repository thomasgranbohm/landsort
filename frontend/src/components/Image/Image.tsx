import clsx from 'clsx';
import NextImage, { ImageProps as NextImageProps } from 'next/image';
import {
	cloneElement,
	Component,
	createElement,
	HTMLAttributes,
	isValidElement,
	ReactElement,
	ReactHTML,
	ReactNode,
} from 'react';

import { getStrapiMedia } from 'utils/media';
import { Fragments } from 'utils/types';

import classes from './Image.module.scss';

type ImageProps = Omit<NextImageProps, 'src'> &
	Fragments.Media & {
		wrapper?: ReactElement<any, any>;
	};

const Image = ({
	alternativeText,
	alt,
	caption,
	className,
	formats,
	height,
	layout,
	name,
	wrapper = createElement('div'),
	url,
	width,
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

	const layoutProps: Partial<NextImageProps> =
		layout === 'fill'
			? {
					layout,
			  }
			: {
					width,
					height,
					layout: layout || 'responsive',
			  };

	return cloneElement(
		wrapper,
		{
			className: clsx(classes['container'], className),
		},
		<NextImage
			placeholder="blur"
			blurDataURL={blurDataURL}
			src={source}
			alt={alternative}
			objectFit="contain"
			{...props}
			{...layoutProps}
		/>
	);
};

export default Image;
