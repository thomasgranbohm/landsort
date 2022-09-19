import HTMLRenderer from 'components/HTMLRenderer/HTMLRenderer';
import ImageWithCaption from 'components/ImageWithCaption/ImageWithCaption';
import Paragraph from 'components/Paragraph/Paragraph';
import Quote from 'components/Quote/Quote';
import Row from 'components/Row/Row';

import { Fragments } from 'utils/types';

interface SectionRendererProps {
	sections: Fragments.Sections.All[];
}

const SectionRenderer = ({ sections }: SectionRendererProps) => {
	const renderSection = (
		{ __typename, ...rest }: Fragments.Sections.All,
		i: number
	) => {
		if (__typename === 'ComponentSectionsMedia') {
			const { media, credit } = rest as Fragments.Sections.Media;

			return <ImageWithCaption media={media} credit={credit} />;
		} else if (__typename === 'ComponentSectionsQuote') {
			const { content, source } = rest as Fragments.Sections.Quote;

			return (
				<Quote key={i} author={source}>
					{content}
				</Quote>
			);
		} else if (__typename === 'ComponentSectionsWysiwyg') {
			const { content } = rest as Fragments.Sections.Wysiwyg;

			return <HTMLRenderer html={content} />;
		}

		return null;
	};

	return (
		<>
			{sections &&
				sections.length > 0 &&
				sections.map(renderSection).filter((a) => !!a)}
		</>
	);
};

export default SectionRenderer;
