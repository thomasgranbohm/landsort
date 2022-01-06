import Column from 'components/Column/Column';
import { FC } from 'react';
import classes from './Paragraph.module.scss';

const Paragraph: FC = ({ children }) => (
	<Column>
		<p className={classes['container']}>{children}</p>
	</Column>
);

export default Paragraph;
