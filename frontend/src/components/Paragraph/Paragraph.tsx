import { FC } from 'react';

import Column from 'components/Column';

import classes from './Paragraph.module.scss';

const Paragraph: FC = ({ children }) => (
	<Column>
		<p className={classes['container']}>{children}</p>
	</Column>
);

export default Paragraph;
