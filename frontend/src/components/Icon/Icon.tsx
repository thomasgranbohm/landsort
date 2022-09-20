import clsx from 'clsx';
import { FC } from 'react';

import { WithClassname } from 'utils/types';

import classes from './Icon.module.scss';

interface IconProps extends WithClassname {
	size?: '4x' | '3x' | '2x' | '1x';
	type: 'menu' | 'close' | 'arrow_drop_down';
}

const Icon: FC<IconProps> = ({ size = '1x', type, className }) => {
	return (
		<span
			className={clsx(
				'material-icons',
				classes['container'],
				classes[`size-${size}`],
				className
			)}
		>
			{type}
		</span>
	);
};

export default Icon;
