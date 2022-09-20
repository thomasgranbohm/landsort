/* eslint-disable react/no-children-prop */
import ReactMarkdown from 'react-markdown';

import Anchor from 'components/Anchor';
import Heading from 'components/Heading';
import List from 'components/List';
import ListItem from 'components/ListItem';
import Paragraph from 'components/Paragraph';

interface HTMLRendererProps {
	html: string;
}

const HTMLRenderer = ({ html }: HTMLRendererProps) => (
	<ReactMarkdown
		children={html}
		components={{
			p: ({ children, ...props }) => (
				<Paragraph {...props}>{children}</Paragraph>
			),
			ul: ({ children, ...props }) => (
				<List {...props} type="ul">
					{children}
				</List>
			),
			ol: ({ children, ...props }) => (
				<List {...props} type="ol">
					{children}
				</List>
			),
			li: ({ children, ...props }) => (
				<ListItem {...props}>{children}</ListItem>
			),
			h1: ({ children, level, ...props }) => (
				<Heading {...props} type="h2">
					{children}
				</Heading>
			),
			h2: ({ children, level, ...props }) => (
				<Heading {...props} type="h3">
					{children}
				</Heading>
			),
			h3: ({ children, level, ...props }) => (
				<Heading {...props} type="h4">
					{children}
				</Heading>
			),
			h4: ({ children, level, ...props }) => (
				<Heading {...props} type="h5">
					{children}
				</Heading>
			),
			h5: ({ children, level, ...props }) => (
				<Heading {...props} type="h6">
					{children}
				</Heading>
			),
			h6: ({ children, level, ...props }) => (
				<Heading {...props} type="b">
					{children}
				</Heading>
			),
			a: ({ children, ...props }) => (
				<Anchor {...props}>{children}</Anchor>
			),
		}}
	/>
);

export default HTMLRenderer;
