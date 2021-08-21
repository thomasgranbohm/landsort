/* eslint-disable @next/next/no-img-element */
import { HTMLAttributes } from 'react';
import { Headshot } from '../../types';
import { getStrapiMedia } from '../../utils/api';
import { concat } from '../../utils/functions';
import classes from './Image.module.scss';

type ImageProps = {
	type: 'headshot' | 'thumbnail';
	className?: string;
} & Pick<Headshot, 'url' | 'name' | 'alternativeText'>;
const Image = ({
	alternativeText,
	name,
	url,
	className,
	type,
	...rest
}: ImageProps) => {
	// TODO: implement sizes.
	return (
		<img
			{...rest}
			className={concat(classes['container'], className, classes[type])}
			src={getStrapiMedia(url)}
			alt={alternativeText || name}
		/>
	);
};

export default Image;
