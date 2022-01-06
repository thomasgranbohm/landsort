import { FC } from 'react';
import classes from './ListItem.module.scss';

interface ListItemProps {}

const ListItem: FC<ListItemProps> = ({ children }) => (
	<li className={classes['container']}>{children}</li>
);

export default ListItem;
