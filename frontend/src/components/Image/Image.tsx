import Column from 'components/Column/Column';
import NextImage, { ImageProps as NextImageProps } from 'next/image';
import { ReactNode } from 'react';
import classes from './Image.module.scss';

interface ImageProps extends NextImageProps {
	source?: string | ReactNode;
}

const Image = ({ source, ...props }: ImageProps) => {
	return (
		<Column className={classes['container']} size="large">
			<NextImage {...props} />
			{source && (
				<figcaption className={classes['source']}>{source}</figcaption>
			)}
		</Column>
	);
};

export default Image;
