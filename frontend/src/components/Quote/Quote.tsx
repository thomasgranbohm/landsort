import Column from 'components/Column/Column';
import { FC, ReactNode } from 'react';
import classes from './Quote.module.scss';

interface QuoteProps {
	author: string | ReactNode;
}

const Quote: FC<QuoteProps> = ({ author, children }) => (
	<Column size="small">
		<figure className={classes['container']}>
			<blockquote>{children}</blockquote>
			<figcaption className={classes['author']}>{author}</figcaption>
		</figure>
	</Column>
);

export default Quote;
