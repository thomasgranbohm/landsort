/* eslint-disable @next/next/no-img-element */
import { HTMLAttributes } from 'react';
import { Headshot } from '../../types';
import { getStrapiMedia } from '../../utils/api';
import { concat } from '../../utils/functions';
import classes from './Image.module.scss';

type ImageProps = {
	type?: 'headshot' | 'thumbnail';
	style?: 'straight' | 'rounded';
	className?: string;
} & Pick<Headshot, 'url' | 'name' | 'alternativeText'>;
const Image = ({
	alternativeText,
	name,
	url,
	className,
	type,
	style,
	...rest
}: ImageProps) => {
	// TODO: implement sizes.
	return (
		<img
			className={concat(
				classes['container'],
				classes[type],
				classes[style],
				className
			)}
			src={getStrapiMedia(url)}
			alt={alternativeText || name}
		/>
	);
};

export default Image;
