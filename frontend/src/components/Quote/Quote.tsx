import { FC, ReactNode } from 'react';

import Column from 'components/Column';
import Row from 'components/Row';

import { WithChildren } from 'utils/types';

import classes from './Quote.module.scss';

interface QuoteProps extends WithChildren {
	author: ReactNode;
}

const Quote: FC<QuoteProps> = ({ author, children }) => (
	<Row>
		<Column size={[12, 8, 6, 4]} start={[null, 2, 3, 4]}>
			<figure className={classes['container']}>
				<blockquote>{children}</blockquote>
				<figcaption className={classes['author']}>{author}</figcaption>
			</figure>
		</Column>
	</Row>
);

export default Quote;
