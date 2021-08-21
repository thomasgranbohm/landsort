import { ArticleStub } from '../../types';
import Column from '../Column/Column';
import CustomImage from '../Image/Image';
import classes from './ArticleBlurb.module.scss';

type ArticleBlurbProps = ArticleStub;

const ArticleBlurb = ({
	headshot,
	slug,
	title,
	published_at,
	created_at,
}: ArticleBlurbProps) => {
	return (
		<a href={slug} className={classes['outer']}>
			<Column size="large">
				<div className={classes['container']}>
					<CustomImage {...headshot} type="thumbnail" />
					<div className={classes['rest']}>
						<h2 className={classes['title']}>{title}</h2>
						<time className={classes['time']}>
							{new Date(
								published_at || created_at
							).toLocaleDateString('sv')}
						</time>
					</div>
				</div>
			</Column>
		</a>
	);
};

export default ArticleBlurb;
