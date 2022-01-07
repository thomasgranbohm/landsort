import { FC } from 'react';

import classes from './Row.module.scss';

const Row: FC = ({ children }) => (
	<section className={classes['container']}>{children}</section>
);

export default Row;
