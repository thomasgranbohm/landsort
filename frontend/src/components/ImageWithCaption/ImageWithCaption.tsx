import Column from 'components/Column/Column';
import Image from 'components/Image/Image';
import Row from 'components/Row/Row';

import { normalize } from 'utils/functions';
import { Fragments, Strapi } from 'utils/types';

import classes from './ImageWithCaption.module.scss';

type ImageWithCaptionProps = Strapi.Cleaned<Fragments.Sections.Media>;

const ImageWithCaption = ({ media, credit }: ImageWithCaptionProps) => (
	<Row className={classes['container']} tag="figure">
		<Column size={12}>
			<Image className={classes['image']} {...normalize(media)} />
		</Column>
		<Column className={classes['credit']} tag="figcaption" size={12}>
			<cite className={classes['inner']}>{credit}</cite>
		</Column>
	</Row>
);

export default ImageWithCaption;
