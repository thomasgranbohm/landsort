import Column from 'components/Column/Column';
import NextImage, { ImageProps as NextImageProps } from 'next/image';
import { ReactNode } from 'react';
import classes from './Image.module.scss';

interface ImageProps extends NextImageProps {
	credit?: string | ReactNode;
}

const Image = ({ credit, ...props }: ImageProps) => {
	return (
		<Column className={classes['container']} size="large">
			<NextImage {...props} />
			{credit && (
				<figcaption className={classes['credit']}>{credit}</figcaption>
			)}
		</Column>
	);
};

export default Image;
