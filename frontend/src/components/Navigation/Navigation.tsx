import { useOverlayTriggerState } from '@react-stately/overlays';
import clsx from 'clsx';
import { useRef } from 'react';
import {
	FocusScope,
	OverlayContainer,
	useButton,
	useOverlay,
	usePreventScroll,
} from 'react-aria';

import Anchor from 'components/Anchor/Anchor';
import Image from 'components/Image/Image';

import { normalize } from 'utils/functions';
import { useBreakpoint } from 'utils/hooks';
import { Fragments, Strapi } from 'utils/types';

import classes from './Navigation.module.scss';

interface NavigationProps extends Fragments.Header {
	logo: Strapi.V4Wrapper<Fragments.Media>;
}

const Navigation = ({ logo, menus }: NavigationProps) => {
	const state = useOverlayTriggerState({});

	const buttonRef = useRef();
	const { buttonProps } = useButton(
		{
			onPress: () => state.toggle(),
		},
		buttonRef
	);

	usePreventScroll({ isDisabled: !state.isOpen });

	return (
		<FocusScope contain={state.isOpen}>
			<nav
				className={clsx(
					classes['container'],
					state.isOpen && classes['open']
				)}
			>
				<Anchor key="ok" href="/" className={classes['logo-container']}>
					<Image
						className={classes['logo']}
						{...normalize(logo)}
						layout="fill"
						objectFit="contain"
						objectPosition={'left'}
					/>
				</Anchor>
				<button
					{...buttonProps}
					ref={buttonRef}
					className={classes['hamburger']}
				>
					hamburger
				</button>
				<ul className={clsx(classes['menu'])}>
					{menus.map(({ pages, title }, i) => (
						<li className={classes['item']} key={i}>
							<p className={classes['title']} tabIndex={0}>
								{title}
								<span className={classes['icon']}>&gt;</span>
							</p>
							<ul className={classes['sub-menu']}>
								{pages.data.map(({ attributes }, i) => (
									<li key={i} className={classes['item']}>
										<Anchor
											className={classes['title']}
											clean
											href={`/${attributes.slug}`}
										>
											{attributes.title}
										</Anchor>
									</li>
								))}
							</ul>
						</li>
					))}
				</ul>
			</nav>
		</FocusScope>
	);
};

export default Navigation;
