import Image from 'components/Image/Image';

import { normalize } from 'utils/functions';
import { Fragments, Strapi } from 'utils/types';

import classes from './ImageWithCaption.module.scss';

type ImageWithCaptionProps = Strapi.Cleaned<Fragments.Sections.Media>;

const ImageWithCaption = ({ media, credit }: ImageWithCaptionProps) => (
	<figure className={classes['container']}>
		<Image {...normalize(media)} />
		<figcaption className={classes['credit']}>{credit}</figcaption>
	</figure>
);

export default ImageWithCaption;
