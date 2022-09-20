import { AriaBreadcrumbsProps } from '@react-types/breadcrumbs';
import clsx from 'clsx';
import {
	Children,
	cloneElement,
	FC,
	OlHTMLAttributes,
	ReactElement,
	useRef,
} from 'react';
import { useBreadcrumbItem } from 'react-aria';

import Anchor, { AnchorProps } from 'components/Anchor';

import classes from './Breadcrumbs.module.scss';

type BreadcrumbItemProps = {
	isCurrent?: boolean;
} & Omit<AriaBreadcrumbsProps<HTMLAnchorElement>, 'children'> &
	AnchorProps;

export const BreadcrumbItem: FC<BreadcrumbItemProps> = ({
	isCurrent,
	href,
	...props
}) => {
	const ref = useRef();

	const { itemProps } = useBreadcrumbItem(
		{
			isDisabled: isCurrent,
			...(props as AriaBreadcrumbsProps<HTMLAnchorElement>),
		},
		ref
	);

	return (
		<li>
			<Anchor
				{...itemProps}
				{...props}
				className={clsx(
					classes['item'],
					isCurrent && classes['current']
				)}
				href={isCurrent ? null : href}
				ref={ref}
			>
				{props.children}
			</Anchor>
			{!isCurrent && (
				<span className={classes['delimiter']} aria-hidden="true">
					/
				</span>
			)}
		</li>
	);
};

interface BreadcrumbsProps extends OlHTMLAttributes<HTMLOListElement> {
	home: string;
}

const Breadcrumbs: FC<BreadcrumbsProps> = ({ className, home, ...props }) => {
	const children = Children.toArray(props.children);

	return (
		<ol className={clsx(classes['container'], className)}>
			<BreadcrumbItem href="/">{home}</BreadcrumbItem>
			{children.map((child, i) =>
				cloneElement(child as ReactElement, {
					isCurrent: i === children.length - 1,
				})
			)}
		</ol>
	);
};

export default Breadcrumbs;
